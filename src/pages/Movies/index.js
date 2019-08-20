import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { Container } from '~/styles';

import Carousel  from '~/components/UI/carousel';
import ListMedia  from '~/components/UI/listMedia';

class MoviesScreen extends Component {
    render() {
      return (
        <Container>
          <Carousel />
          <ScrollView>
            <ListMedia />
          </ScrollView>
        </Container>
      );
    }  
}

export default MoviesScreen;