import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ConfigContext } from '~/config/appContext';

import { backdropImage } from '~/helpers/Image';
import NavigationHelper from '~/helpers/Navigation';
import DateHelper from '~/helpers/Date';

import { 
  Container,
  Item,
  Header,
  Info,
  Poster,
  VoteAverage,
  Label,
  Title,
  Release,
  Content,
} from './styles';

Icon.loadFont();

const setTitle = (item) => (item.title) ? item.title : item.name;
const setRoute = (media) => media === 'movie' ? 'MoviesDetails' : 'SeriesDetails';

export default FavoritesScreen = () => {
  const context = useContext(ConfigContext);
  return (
    <Container>
      <FlatList 
        data={context.favorites}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
            <Item>
                <TouchableOpacity onPress={() => NavigationHelper.navigate(setRoute('movie'), {
                    mediaType: 'movie',
                    mediaId: item.id,
                    title: setTitle(item),
                  })}
                >
                  <Header>
                      <Poster 
                          source={{uri: backdropImage(item.backdrop_path)}}
                          resizeMode="contain"
                      />
                      <VoteAverage>
                      <Icon
                          name="md-star"
                          size={24}
                          color="#000"
                      />
                      <Label>{ item.vote_average.toFixed(1) }</Label>
                      </VoteAverage>
                      <Info>
                          <Title>{ setTitle(item) }</Title>
                          <Release>Release Date: { DateHelper.longFormat(item.release_date)}</Release>
                      </Info>
                  </Header>
                </TouchableOpacity>
                <Content>
                  <Release>View Details</Release>
                  <Release>Remove</Release>
                </Content>
            </Item>
        )}
    />
    </Container>
  );
}
