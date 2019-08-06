import React, { Component, Fragment } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

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

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Toy Story 4',
  };
    render() {
      return (
      <Container>
        <ScrollView>
        <Backdrop source={{uri: 'https://image.tmdb.org/t/p/w780/m67smI1IIMmYzCl9axvKNULVKLr.jpg'}}>
          <Header>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
            <Info>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <VoteAverage>Ratings</VoteAverage>
            </Info>
          </Header>
        </Backdrop>
          <Content>
            <Overview>Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.</Overview>
          </Content>
          <Suggestions>
            <ListMedia />
          </Suggestions>
        </ScrollView>
      </Container>
      );
    }  
}

export default DetailsScreen;