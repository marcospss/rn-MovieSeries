import React, { useState, useEffect } from 'react';
import { Platform, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getGenres } from '~/services/Common';
import { getDiscover } from '~/services/Discover';
import { backdropImage } from '~/helpers/Image';
import DateHelper from '~/helpers/Date';
import NavigationHelper from '~/helpers/Navigation';

import { 
  Container,
  Filters,
  FilterGroup,
  LabelFilter,
  Picker,
  Button,
  ContainerDiscover,
  Section,
  Item,
  Header,
  Info,
  Poster,
  VoteAverage,
  Label,
  Title,
  Release,
  Content,
  Overview
} from './styles';

import AlertError from '~/components/UI/alertError';

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';

const getYears = () => {
  const date = new Date(),
  currentYear = date.getFullYear();
  let listYears = [];
  
  for (let year = currentYear + 1; year >= 1900; year -= 1) {
    listYears.push(year);
  };
  
  return listYears;
};

Icon.loadFont();

export default DiscoverScreen = () => {
  const [error, setError] = useState(false);
  const [yearsCollection, setCollectionsYears] = useState([]);
  const [discoverCollection, setDiscoverCollection] = useState([]);
  const [year, setYear] = useState('');
  const [genresCollection, setGenresCollection] = useState([]);
  const [genre, setGenre] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(false);

  const options = {
    mediaType: 'movie',
  };

  async function loadGenres() {
    try {
      setLoading(true);
      const response = await getGenres(options.mediaType);
      setGenresCollection(response.data.genres);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  async function handleSubmitFilters() {
    const filterOptions = {
      mediaType: 'movie',
      genre,
      sortBy,
      year
    };

    try {
      setLoading(true);
      const response = await getDiscover(filterOptions);
      setDiscoverCollection(response.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(true);
    }
  };
  
  useEffect(() => {
    setCollectionsYears(getYears());
    loadGenres();
  }, []);

  return (
    <Container>
    <Loading visible={loading} />
    { error && <AlertError /> }
    {
      !loading
      &&
      !error
      &&
      <>
      <Filters>
        <FilterGroup>
          <LabelFilter>
            Year
          </LabelFilter>
          <Picker
            selectedValue={year}
            onValueChange={(itemValue, itemIndex) =>
              setYear(itemValue)
            }>
            {
              yearsCollection.map(year => (
                <Picker.Item key={year} label={String(year)} value={year} />
              ))
            }
          </Picker>
        </FilterGroup>
        <FilterGroup>
          <LabelFilter>
            Genres
          </LabelFilter>
          <Picker
            selectedValue={genre}
            onValueChange={(itemValue, itemIndex) =>
              setGenre(itemValue)
            }>
            {
              (genresCollection.length > 0) && genresCollection.map(genre => (
                <Picker.Item key={genre.id} label={genre.name} value={genre.id} />
              ))
            }
          </Picker>
        </FilterGroup> 
      </Filters>
      <Filters>
        <FilterGroup>
          <LabelFilter>
            Sort By
          </LabelFilter>
          <Picker
            selectedValue={sortBy}
            onValueChange={(itemValue, itemIndex) =>
              setSortBy(itemValue)
            }>
            <Picker.Item value="popularity.desc" label="Popularity Descending" />
            <Picker.Item value="popularity.asc" label="Popularity Ascending" />
            <Picker.Item value="vote_average.desc" label="Rating Descending" />
            <Picker.Item value="vote_average.asc" label="Rating Ascending" />
            <Picker.Item value="primary_release_date.desc" label="Release Date Descending" />
            <Picker.Item value="primary_release_date.asc" label="Release Date Ascending" />
            <Picker.Item value="title.asc" label="Title (A-Z)" />
            <Picker.Item value="title.desc" label="Title (Z-A)" />
          </Picker>
        </FilterGroup>
        <Button onPress={() => handleSubmitFilters() }>
          <Icon
              name={`${OS}-search`}
              size={30}
              color="#000"
          />
        </Button>
      </Filters>
      {
        (discoverCollection.length > 0)
        &&
        <ContainerDiscover>
        <Section>Movie Review</Section>
        <FlatList 
          data={discoverCollection}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Item>
              <TouchableOpacity onPress={() => NavigationHelper.navigate('MoviesDetails', {
                  mediaType: 'movie',
                  mediaId: item.id,
                  title: item.title,
                })}
              >
                <Header>
                  <Poster 
                    source={{uri: backdropImage(item.backdrop_path)}}
                    resizeMode="contain"
                  />
                  <VoteAverage>
                  <Icon
                    name="md-star"
                    size={24}
                    color="#000"
                  />
                  <Label>{ item.vote_average.toFixed(1) }</Label>
                  </VoteAverage>
                  <Info>
                    <Title> { item.title }</Title>
                    <Release>{ DateHelper.longFormat(item.release_date)}</Release>
                  </Info>
                </Header>
                <Content>
                  <Overview>{ item.overview }</Overview>
                </Content>
              </TouchableOpacity>
            </Item>
          )}
        />
        </ContainerDiscover>
      }
      </>
    }
    </Container>
  )
}