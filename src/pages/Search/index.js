import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import NavigationHelper from '~/helpers/Navigation';

import { 
  Button,
  Label
} from '~/styles';

import { 
  Container,
  Content,
  Poster,
  Details,
  Title,
  Category,
  VoteAverage,
  Actions,
} from './styles';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  };
    render() {
      return (
      <Container>
        <ScrollView>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <Category>August 6th 2019, 2h 30m</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
              <Actions>
                <Button onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                  <Label>
                    Read more
                  </Label>
                  <Icon
                    style={{marginLeft: 20}}
                    name="md-arrow-forward"
                    size={26}
                    color="#fff"
                  />
                </Button>
              </Actions>
            </Details>
          </Content>
        </ScrollView>
      </Container>
      );
    }  
}

export default SearchScreen;