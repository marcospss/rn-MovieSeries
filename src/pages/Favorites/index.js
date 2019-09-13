import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ConfigContext } from '~/config/appContext';
import { backdropImage } from '~/helpers/Image';
import DateHelper from '~/helpers/Date';

import { 
  Container,
  Section,
  Item,
  Header,
  Info,
  Poster,
  VoteAverage,
  Label,
  Title,
  Release,
  Content,
  Overview
} from './styles';

Icon.loadFont();

const setTitle = (item) => (item.title) ? item.title : item.name;

export default FavoritesScreen = () => {
  const context = useContext(ConfigContext);

  return (
    <Container>
      <Section>Favorites</Section>
      <FlatList 
        data={context.favorites}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
            <Item>
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
                        <Release>{ DateHelper.longFormat(item.release_date)}</Release>
                    </Info>
                </Header>
                <Content>
                    <Overview>{ item.overview }</Overview>
                </Content>
            </Item>
        )}
    />
    </Container>
  );
}
