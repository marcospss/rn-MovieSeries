import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getDetails, getRecommendations } from '~/services/Common';
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
import CarouselSeasons  from '~/components/UI/carouselSeasons';
import Loading from '~/components/UI/loading';
import Like from '~/components/UI/like';
import AlertError from '~/components/UI/alertError';

Icon.loadFont();

const DetailsSeries = ({ navigation }) => {
  const [error, setError] = useState(false);
  const mediaId = navigation.getParam('mediaId');
  const [details, setDetails] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const options = {
    mediaType: 'tv',
    mediaId
  };

  async function loadDetails() {
    try {
      const response = await getDetails(options);
      setDetails(response.data);
    } catch (error) {
      setError(true);
    }
  };

  async function loadRecommendations() {
    try {
      const response = await getRecommendations(options);
      setRecommendations(response.data.results);
      setLoading(true);
    } catch (error) {
      setError(true);
    }
  };


  useEffect(() => {
    loadDetails();
    loadRecommendations();
  }, [mediaId]);

  return (
  <Container>
    <Loading visible={!isLoading} />
    { error && <AlertError /> }
    {
      isLoading
      &&
      !error
      &&
      <ScrollView>
        <Backdrop 
          source={{uri: backdropImage(details.backdrop_path)}}
          resizeMode="contain"
        >
          <Like mediaData={{...details, mediaType: "tv"}} />
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
          <Recommendations>
          {
            details.seasons && (details.seasons.length > 0) && 
            <CarouselSeasons 
              title="Seasons" 
              data={details.seasons.reverse()}
              mediaId={mediaId}
              mediaTitle={details.name}
              routeName="SeasonDetailsById"
            />
          }
          </Recommendations>
          <Recommendations>
          {
            (recommendations.length > 0)
            &&
            <ListMedia 
              title="Recommendations" 
              data={recommendations}
              mediaType="tv"
              routeName="SeriesDetails"
            />
          }
          </Recommendations>
      </ScrollView> 
    }
  </Container>
  );
}

const genres = (details) => details && details.genres && details.genres.map((genre) => genre.name).join(' | ');

export default DetailsSeries;