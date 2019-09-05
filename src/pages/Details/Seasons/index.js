import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getSeasonDetailsById } from '~/services/Tv';
import { backdropImage, posterImage } from '~/helpers/Image';

import { 
  Container, 
  Backdrop, 
  Header, 
  Title, 
  Category,
  VoteAverage,
  Poster, 
  Info, 
  Content,
  Overview,
  Recommendations,
  Label
} from './styles';

import ListMedia  from '~/components/UI/listMedia';
import Loading from '~/components/UI/loading';

Icon.loadFont();

const DetailsSeries = ({ navigation }) => {
  const mediaId = navigation.getParam('mediaId');
  const seasonNumber = navigation.getParam('seasonNumber');
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const options = {
    mediaId,
    seasonNumber,
  };

  async function loadDetails() {
    try {
      setLoading(true);
      const response = await getSeasonDetailsById(options);
      setDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDetails();
  }, [mediaId]);

  return (
  <Container>
    <Loading visible={loading} />
    {
      !loading
      &&
      <ScrollView>
        <Backdrop 
          source={{uri: backdropImage(details.backdrop_path)}}
          resizeMode="contain"
        >
          <VoteAverage>
              <Icon
                name="md-star"
                size={24}
                color="#000"
              />
              <Label>{ details.vote_average }</Label>
            </VoteAverage>
          <Header>
            <Poster 
              source={{uri: posterImage(details.poster_path)}}
              resizeMode="contain" 
            />
            
            <Info>
              <Title>{ details.name }</Title>
              <Category>{ genres(details) }</Category>
            </Info>
          </Header>
        </Backdrop>
          <Content>
            <Overview>{ details.overview }</Overview>
          </Content>
      </ScrollView> 
    }
  </Container>
  );
}

const genres = (details) => details && details.genres && details.genres.map((genre) => genre.name).join(' | ');

export default DetailsSeries;