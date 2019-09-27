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
  Overview,
  Actions,
  Button,
  LabelButton,
} from './styles';

Icon.loadFont();

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';
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
                <TouchableOpacity onPress={() => NavigationHelper.navigate(setRoute(item.mediaType), {
                    mediaType: item.mediaType,
                    mediaId: item.id,
                    title: item.title,
                  })}
                >
                  <Header>
                      <Poster 
                          source={{uri: backdropImage(item.backdropPath)}}
                          resizeMode="contain"
                      />
                      <VoteAverage>
                        <Icon
                          name={`${OS}-star`}
                          size={24}
                          color="#000"
                        />
                        <LabelVoteAverage>{ item.voteAverage }</LabelVoteAverage>
                      </VoteAverage>
                      <Info>
                          <Title>{ item.title }</Title>
                          <Release>{ DateHelper.longFormat(item.date)}</Release>
                      </Info>
                  </Header>
                </TouchableOpacity>
                <Overview>{ item.overview }</Overview>
                <Actions>
                  <Button onPress={() => NavigationHelper.navigate(setRoute(item.mediaType), {
                      mediaType: item.mediaType,
                      mediaId: item.id,
                      title: item.title,
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
