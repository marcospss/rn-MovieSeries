import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { getNowPlaying, getUpcoming } from '~/services/Movies';
import { getPopular, getTopRated } from '~/services/Common';

import { Container } from '~/styles';

import Carousel  from '~/components/UI/carousel';
import ListMedia  from '~/components/UI/listMedia';

export default MoviesScreen = ({ filterProperties, navigation }) => {
  const [endListCarousel, setEndListCarousel] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  async function loadNowPlaying() {
    try {
      const response = await getNowPlaying();
      setNowPlaying(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const showIconEndList = () => setEndListCarousel(true);

  async function loadPopular() {
    try {
      const response = await getPopular(filterProperties.mediaType);
      setPopular(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  async function loadTopRated() {
    try {
      const response = await getTopRated(filterProperties.mediaType);
      setTopRated(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  async function loadUpcoming() {
    try {
      const response = await getUpcoming();
      setUpcoming(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadNowPlaying();
    loadPopular();
    loadTopRated();
    loadUpcoming();
  }, []);

  return (
    <Container>
      <Carousel 
        title="Now Playing Movies" 
        data={nowPlaying && nowPlaying.slice(0,8)}
        endListCarousel={endListCarousel}
        showIconEndList={showIconEndList}
        navigation={navigation}
      />
      <ScrollView>
        <ListMedia 
          title="Popular Movies" 
          data={popular}
        />
        <ListMedia 
          title="Top Rated Movies"
          data={topRated} 
        />
        <ListMedia 
          title="Upcoming Movies" 
          data={upcoming}
        />
      </ScrollView>
    </Container>
  )
};

MoviesScreen.defaultProps = {
  filterProperties: {
    mediaType: 'movie',
    discover: {
      mediaType: 'movie',
      sortBy: 'popularity.desc',
      year: '',
      genre: ''
    },
  }
};

MoviesScreen.propTypes = {
  filterProperties: PropTypes.object.isRequired
};
