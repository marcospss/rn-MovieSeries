import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import NavigationHelper from '~/helpers/Navigation';
import Carousel  from '~/components/UI/carousel';

import { 
  Container,
  Content,
  Poster,
  Image,
  Details,
  Title,
  Category,
  VoteAverage,
} from './styles';
class SeriesScreen extends Component {
    render() {
      return (
        <Container>
          <Carousel />
          <ScrollView>
            <Content>
              <Poster>
                <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                  <Image source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
                </TouchableOpacity>
              </Poster>
              <Details>
                <Title>Toy Story 4</Title>
                <Category>Adventure | Animation | Comedy | Family</Category>
                <Category>August 6th 2019, 2h 30m</Category>
                <VoteAverage>Rating: 7.2 </VoteAverage>
              </Details>
            </Content>
            <Content>
              <Poster>
                <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                  <Image source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
                </TouchableOpacity>
              </Poster>
              <Details>
                <Title>Toy Story 4</Title>
                <Category>Adventure | Animation | Comedy | Family</Category>
                <Category>August 6th 2019, 2h 30m</Category>
                <VoteAverage>Rating: 7.2 </VoteAverage>
              </Details>
            </Content>
            <Content>
              <Poster>
                <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                  <Image source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
                </TouchableOpacity>
              </Poster>
              <Details>
                <Title>Toy Story 4</Title>
                <Category>Adventure | Animation | Comedy | Family</Category>
                <Category>August 6th 2019, 2h 30m</Category>
                <VoteAverage>Rating: 7.2 </VoteAverage>
              </Details>
            </Content>
            <Content>
              <Poster>
                <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                  <Image source={{uri: 'https://image.tmdb.org/t/p/w92/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'}} />
                </TouchableOpacity>
              </Poster>
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

export default SeriesScreen;