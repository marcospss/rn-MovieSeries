import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { stillImage } from '~/helpers/Image';
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

export default ListSeasons = ({ title, data }) => {
    return (
        <Container>
            <Section>Episodes { title }</Section>
                <FlatList 
                    data={data}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <Item>
                            <Header>
                                <Poster 
                                    source={{uri: stillImage(item.still_path, 'w185')}}
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
                                    <Title>{ item.episode_number }. { item.name }</Title>
                                    <Release>{ DateHelper.longFormat(item.air_date)}</Release>
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
};
