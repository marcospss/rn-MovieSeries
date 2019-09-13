import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import NavigationHelper from '~/helpers/Navigation';
import { posterImage } from '~/helpers/Image';

import { Container, Section, Poster, Title } from './styles';

const setTitle = (item) => (item.title) ? item.title : item.name;

export default ListMedia = ({ title, data, routeName, mediaType }) => {
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
                                    mediaType,
                                    mediaId: item.id,
                                    title: setTitle(item),
                                })}
                            >
                                <Poster 
                                    source={{uri: posterImage(item.poster_path)}}
                                    resizeMode="contain"
                                />
                                <Title>{ setTitle(item) }</Title>
                            </TouchableOpacity>
                        )}
                    />
            </Container>
        </>
    );
};
