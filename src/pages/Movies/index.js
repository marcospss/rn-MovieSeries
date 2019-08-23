import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getDiscover } from '~/services/Discover';
import { getTopRated } from '~/services/Common';

import { Container } from '~/styles';

import Carousel  from '~/components/UI/carousel';
import ListMedia  from '~/components/UI/listMedia';

export default MoviesScreen = ({ filterProperties }) => {

  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);

  async function loadMovies() {
    try {
      const response = await getDiscover(filterProperties.discover);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  async function loadTopRated() {
    try {
      const response = await getTopRated(filterProperties.topRated);
      setTopRated(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    loadMovies();
    loadTopRated();
  }, []);

  return (
    <Container>
      <Carousel data={movies && movies.slice(0,9)} />
        <ListMedia title="Last Movies" data={movies && movies.slice(10,19)} />
        <ListMedia title="Top Rated Movies" data={topRated} />
    </Container>
  )
};

MoviesScreen.defaultProps = {
  filterProperties: {
    discover: {
      mediaType: 'movie',
      sortBy: 'popularity.desc',
      year: '',
      genre: ''
    },
    topRated: {
      mediaType: 'movie'
    }
  }
};

MoviesScreen.propTypes = {
  filterProperties: PropTypes.object.isRequired
};
