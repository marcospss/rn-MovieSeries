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
  Actions,
  Button
} from './styles';

class FavoritesScreen extends Component {
  static navigationOptions = {
    title: 'Favorites',
  };
    render() {
      return (
      <Container>
        <ScrollView>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <Category>August 6th 2019, 2h 30m</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
              <Actions>
              <Button
                  onPress={()=>{}}
                  title="Learn More"
                  accessibilityLabel="Learn more about this purple button"
                />
                <Button
                onPress={()=>{}}
                title="Learn More"
                accessibilityLabel="Learn more about this purple button"
              />
              </Actions>
            </Details>
          </Content>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <Category>August 6th 2019, 2h 30m</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
            </Details>
          </Content>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <Category>August 6th 2019, 2h 30m</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
            </Details>
          </Content>
          <Content>
          <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
          </TouchableOpacity>
            <Details>
              <Title>Toy Story 4</Title>
              <Category>Adventure | Animation | Comedy | Family</Category>
              <Category>August 6th 2019, 2h 30m</Category>
              <VoteAverage>Rating: 7.2 </VoteAverage>
            </Details>
          </Content>
        </ScrollView>
      </Container>
      );
    }  
}

export default FavoritesScreen;