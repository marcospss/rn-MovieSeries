import React, { useState, useEffect, useContext, useReducer, useCallback } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ConfigContext } from '~/config/appContext';
import getRealm from '~/services/Realm';

import { Container } from './styles';

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';

Icon.loadFont();

export default Like = ({ mediaData, mediaType }) => {

    async function saveFavorite(isFavorite) {
        const data = {
            id: mediaData.id,
            title: (mediaData.title) ? mediaData.title : mediaData.name,
            date: (mediaData.release_date) ? mediaData.release_date : mediaData.first_air_date,
            backdropPath: mediaData.backdrop_path,
            overview: mediaData.overview,
            voteAverage: mediaData.vote_average,
            isFavorite: isFavorite,
            mediaType,
        };

        const realm = await getRealm();
        
        realm.write(() => {
            realm.create('Favorites', data, 'modified');
        });
        return data;
    }

    async function handleAddFavorite(isFavorite) {
        try {
          await saveFavorite(isFavorite);
        } catch (error) {
            console.tron.log('saveFavorite - error ->', error);
        }
    }

    //<ion-icon name="heart-dislike"></ion-icon>
    return (
        <Container>
            <TouchableOpacity onPress={() => handleAddFavorite(true)}>
                <Icon
                    name={`${OS}-heart`}
                    size={30}
                    color="#000"
                />
            </TouchableOpacity>
        </Container>
    );
};
