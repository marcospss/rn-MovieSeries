import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getDetails } from '~/services/Common';
import NavigationHelper from '~/helpers/Navigation';
import { backdropImage, posterImage } from '~/helpers/Image';
import { Loading, Modal } from '~/styles'

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
  Suggestions 
} from './styles';

import ListMedia  from '~/components/UI/listMedia';

Icon.loadFont();

const DetailsScreen = ({ navigation }) => {

  const mediaId = navigation.getParam('mediaId');
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  async function loadDetails() {
    try {
      const options = {
        mediaType: 'movie',
        mediaId
      }
      setLoading(true);
      const response = await getDetails(options);
      setDetails(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDetails();
  }, [mediaId]);

  return (
  <Container>
    <Modal visible={loading}>
      <Loading />
    </Modal>
    {
      !loading
      &&
      <ScrollView>
        <Backdrop 
          source={{uri: backdropImage(details.backdrop_path)}}
          resizeMode="contain"
        >
          <Header>
            <Poster 
              source={{uri: posterImage(details.poster_path)}}
              resizeMode="contain" 
            />
            <Info>
              <Title>{ details.title }</Title>
              <Category>{ genres(details) }</Category>
              <VoteAverage>{ voteAverage(details) }</VoteAverage>
            </Info>
          </Header>
        </Backdrop>
          <Content>
            <Overview>{ details.overview }</Overview>
          </Content>
          <Suggestions>
            <ListMedia />
          </Suggestions>
      </ScrollView> 
    }
  </Container>
  );
}

const genres = (details) => details && details.genres && details.genres.map((genre) => genre.name).join(' | ');

const voteAverage = (details) => details && (details.vote_average * 10);

DetailsScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <Icon 
      style={{ paddingLeft: 10 }}
      onPress={() => NavigationHelper.navigate('Home')}
      name="md-arrow-back"
      size={26}
      color="#fff"
    />
  ),
  title: navigation.getParam('title'),
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#efefef',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default DetailsScreen;