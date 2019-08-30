import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { getOnTheAir, getAiringToday } from '~/services/Tv';
import { getPopular, getTopRated } from '~/services/Common';

import { Container } from '~/styles';

import Carousel  from '~/components/UI/carousel';
import ListMedia  from '~/components/UI/listMedia';

export default SeriesScreen = ({ filterProperties, navigation }) => {
  const [endListCarousel, setEndListCarousel] = useState(false);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  async function loadOnTheAir() {
    try {
      const response = await getOnTheAir();
      setOnTheAir(response.data.results);
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

  async function loadAiringToday() {
    try {
      const response = await getAiringToday();
      setAiringToday(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOnTheAir();
    loadPopular();
    loadTopRated();
    loadAiringToday();
  }, []);

  return (
    <Container>
      <Carousel 
        title="Popular TV Shows" 
        data={popular && popular.slice(0,8)}
        endListCarousel={endListCarousel}
        showIconEndList={showIconEndList}
        mediaType={filterProperties.mediaType}
        routeName="DetailsSeries"
      />
      <ScrollView>
        <ListMedia 
          title="Top Rated TV Shows"
          data={topRated} 
          mediaType={filterProperties.mediaType}
          routeName="DetailsSeries"
        />
        <ListMedia 
          title="Currently Airing TV Shows" 
          data={onTheAir}
          mediaType={filterProperties.mediaType}
          routeName="DetailsSeries"
        />
        <ListMedia 
          title="TV Shows Airing Today" 
          data={airingToday}
          mediaType={filterProperties.mediaType}
          routeName="DetailsSeries"
        />
      </ScrollView>
    </Container>
  )
};

SeriesScreen.defaultProps = {
  filterProperties: {
    mediaType: 'tv',
  }
};

SeriesScreen.propTypes = {
  filterProperties: PropTypes.object.isRequired
};
