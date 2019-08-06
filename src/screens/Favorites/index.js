import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import NavigationHelper from '~/helpers/Navigation';

import { 
  Container,
  Content,
  Poster,
  Details,
  Title,
  Category,
  VoteAverage,
  Overview
} from './styles';

class FavoritesScreen extends Component {
  static navigationOptions = {
    title: 'Favorites',
  };
    render() {
      return (
      <Container>
        <ScrollView style={{flex: 1}}>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w300/m67smI1IIMmYzCl9axvKNULVKLr.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
              <Overview>Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.</Overview>
            </Details>
          </Content>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w300/m67smI1IIMmYzCl9axvKNULVKLr.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
              <Overview>Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.</Overview>
            </Details>
          </Content>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w300/m67smI1IIMmYzCl9axvKNULVKLr.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
              <Overview>Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.</Overview>
            </Details>
          </Content>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w300/m67smI1IIMmYzCl9axvKNULVKLr.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
              <Overview>Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.</Overview>
            </Details>
          </Content>
        </ScrollView>
      </Container>
      );
    }  
}

export default FavoritesScreen;