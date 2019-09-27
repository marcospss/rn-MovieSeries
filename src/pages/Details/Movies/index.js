import React, { useState, useEffect, useContext } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getDetails, getRecommendations } from '~/services/Common';
import { backdropImage, posterImage } from '~/helpers/Image';
import { ConfigContext } from '~/config/appContext';

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
  Label
} from './styles';

import ListMedia  from '~/components/UI/listMedia';
import Loading from '~/components/UI/loading';
import Like from '~/components/UI/like';

Icon.loadFont();

const genres = (details) => details && details.genres && details.genres.map((genre) => genre.name).join(' | ');

export default DetailsMovie = ({ navigation }) => {
  const mediaId = navigation.getParam('mediaId');
  const [details, setDetails] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = {
    mediaType: 'movie',
    mediaId
  };

  async function loadDetails() {
    try {
      setLoading(true);
      const response = await getDetails(options);
      setDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function loadRecommendations() {
    try {
      setLoading(true);
      const response = await getRecommendations(options);
      setRecommendations(response.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const context = useContext(ConfigContext);
  console.tron.log('DetailsMovie -> Context ->', context);

  useEffect(() => {
    loadDetails();
    loadRecommendations();
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
          <Like mediaData={details} mediaType="movie" />
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
              <Title>{ details.title }</Title>
              <Category>{ genres(details) }</Category>
            </Info>
          </Header>
        </Backdrop>
          <Content>
            <Overview>{ details.overview }</Overview>
          </Content>
          {
            (recommendations.length > 0)
            &&
            <ListMedia 
              title="Recommendations" 
              data={recommendations}
              mediaType="movie"
              routeName="MoviesDetails"
            />
          }
      </ScrollView> 
    }
  </Container>
  );
}
