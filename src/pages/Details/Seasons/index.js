import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getSeasonDetailsById } from '~/services/Tv';
import { posterImage } from '~/helpers/Image';

import { 
  Container, 
  Header, 
  Poster,
  Info,
  Title,
  Season,
  Episodes,
  Release,
  Content,
  Overview,
} from './styles';

import DateHelper from '~/helpers/Date';
import Loading from '~/components/UI/loading';
import ListSeasons from '~/components/UI/listSeasons';
import AlertError from '~/components/UI/alertError';

Icon.loadFont();

const DetailsSeason = ({ navigation }) => {
  const [error, setError] = useState(false);
  const mediaTitle = navigation.getParam('mediaTitle');
  const mediaId = navigation.getParam('mediaId');
  const seasonNumber = navigation.getParam('seasonNumber');
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const options = {
    mediaId,
    seasonNumber,
  };

  async function loadDetails() {
    try {
      setLoading(true);
      const response = await getSeasonDetailsById(options);
      setDetails(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    loadDetails();
  }, [mediaId]);

  return (
  <Container>
    <Loading visible={loading} />
    { error && <AlertError /> }
    {
      !loading
      &&
      !error
      &&
      <ScrollView>
          <Header>
            <Poster 
              source={{uri: posterImage(details.poster_path)}}
              resizeMode="contain" 
            />
            <Info>
              <Title>{ mediaTitle }</Title>
              <Season>{ details.name }</Season>
              <Episodes>{ details.episodes && details.episodes.length } episodes</Episodes>
              <Release>Air date: { DateHelper.longFormat(details.air_date)}</Release>
            </Info>
          </Header>
          <Content>
            <Overview>{ details.overview }</Overview>
          </Content>
          {
            details.episodes && (details.episodes.length > 0) && 
            <ListSeasons
              title={details.name}
              data={details.episodes}
            />
          }
      </ScrollView> 
    }
  </Container>
  );
}

export default DetailsSeason;