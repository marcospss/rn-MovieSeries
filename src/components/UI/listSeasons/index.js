import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import NavigationHelper from '~/helpers/Navigation';
import { posterImage } from '~/helpers/Image';

import { Container, Section, Poster, Title } from './styles';

export default ListSeasons = ({ title, data, routeName, mediaTitle, mediaId }) => {
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
                                <Poster 
                                    source={{uri: posterImage(item.poster_path)}}
                                    resizeMode="contain"
                                />
                                <Title>{ item.name }</Title>
                            </TouchableOpacity>
                        )}
                    />
            </Container>
        </>
    );
};
