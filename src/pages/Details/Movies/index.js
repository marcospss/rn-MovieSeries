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
  Label
} from './styles';

import ListMedia  from '~/components/UI/listMedia';
import Loading from '~/components/UI/loading';
import Like from '~/components/UI/like';

Icon.loadFont();

const DetailsMovie = ({ navigation }) => {
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

const genres = (details) => details && details.genres && details.genres.map((genre) => genre.name).join(' | ');

// DetailsMovie.navigationOptions = ({ navigation }) => ({
//   headerLeft: (
//     <Icon 
//       style={{ paddingLeft: 10 }}
//       onPress={() => NavigationHelper.navigate('Home')}
//       name="md-arrow-back"
//       size={26}
//       color="#fff"
//     />
//   ),
//   title: navigation.getParam('title'),
//   headerStyle: {
//     backgroundColor: '#000',
//   },
//   headerTintColor: '#efefef',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// });

export default DetailsMovie;