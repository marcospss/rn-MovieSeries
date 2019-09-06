import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import NavigationHelper from '~/helpers/Navigation';
import { posterImage } from '~/helpers/Image';
import DateHelper from '~/helpers/Date';

import { 
    Container,
    Section,
    Item,
    Info,
    Poster,
    Title,
    Episodes,
    Release,
} from './styles';

export default CarouselSeasons = ({ title, data, routeName, mediaTitle, mediaId }) => {
    return (
        <>
            <Container>
                <Section>{ title }</Section>
                    <FlatList 
                        horizontal={true}
                        data={data}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => NavigationHelper.navigate(routeName, {
                                mediaTitle,
                                mediaId,    
                                seasonNumber: item.season_number,
                            })}
                            >
                                <Item>
                                    <Poster 
                                        source={{uri: posterImage(item.poster_path)}}
                                        resizeMode="contain"
                                    />
                                    <Info>
                                        <Title>{ item.name }</Title>
                                        <Episodes>{ item.episode_count } episodes</Episodes>
                                        <Release>{ DateHelper.longFormat(item.air_date)}</Release>
                                    </Info>
                                </Item>
                            </TouchableOpacity>
                        )}
                    />
            </Container>
        </>
    );
};
