import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import NavigationHelper from '~/helpers/Navigation';
import DateHelper from '~/helpers/Date';
import { backdropImage } from '~/helpers/Image';

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
    Overview
} from './styles';

const checkTitle = (item) => (item.title) ? item.title : item.name;

const checkRoute = (media) => media === 'movie' ? 'MoviesDetails' : 'SeriesDetails';

Icon.loadFont();

export default ListSearch = ({ title, data }) => {
    return (
        <Container>
                <FlatList
                    data={data}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => NavigationHelper.navigate(checkRoute(item.media_type), {
                                mediaType: item.media_type,
                                mediaId: item.id,
                                title: checkTitle(item),
                            })}
                        >
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
                                <Label>{ item.vote_average }</Label>
                                </VoteAverage>
                                <Info>
                                    <Title>{ checkTitle(item) }</Title>
                                    <Release>{ DateHelper.longFormat(item.release_date)}</Release>
                                </Info>
                            </Header>
                            <Content>
                                <Overview>{ item.overview }</Overview>
                            </Content>
                        </Item>
                        </TouchableOpacity>
                    )}
                />
        </Container>
    );
};