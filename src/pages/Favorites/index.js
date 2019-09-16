import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, Platform } from 'react-native';
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
  LabelVoteAverage,
  Title,
  Release,
  Actions,
  Button,
  LabelButton,
} from './styles';

Icon.loadFont();

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';
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
                          name={`${OS}-star`}
                          size={24}
                          color="#000"
                        />
                        <LabelVoteAverage>{ item.vote_average.toFixed(1) }</LabelVoteAverage>
                      </VoteAverage>
                      <Info>
                          <Title>{ setTitle(item) }</Title>
                          <Release>Release Date: { DateHelper.longFormat(item.release_date)}</Release>
                      </Info>
                  </Header>
                </TouchableOpacity>
                <Actions>
                  <Button onPress={() => NavigationHelper.navigate(setRoute('movie'), {
                      mediaType: 'movie',
                      mediaId: item.id,
                      title: setTitle(item),
                    })}
                  >
                    <Icon
                      name={`${OS}-eye`}
                      size={24}
                      color="#000"
                    />
                    <LabelButton>View Details</LabelButton>
                  </Button>
                  <Button>
                    <Icon
                      name={`${OS}-trash`}
                      size={24}
                      color="#000"
                    />
                    <LabelButton>Remove</LabelButton>
                  </Button>
                </Actions>
            </Item>
        )}
    />
    </Container>
  );
}
