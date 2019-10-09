import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ConfigContext } from '~/config/appContext';
import getRealm from '~/services/Realm';

import { Container } from './styles';

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';

Icon.loadFont();

export default Like = ({ mediaData }) => {
    const context = useContext(ConfigContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const data = {
        id: mediaData.id,
        title: (mediaData.title) ? mediaData.title : mediaData.name,
        date: (mediaData.release_date) ? mediaData.release_date : mediaData.first_air_date,
        backdropPath: mediaData.backdrop_path,
        overview: mediaData.overview,
        voteAverage: mediaData.vote_average,
        mediaType: mediaData.mediaType,
    };

    async function saveFavorite() {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Favorites', data, 'modified');
        });
    }

    async function removeFavorite() {
        const realm = await getRealm();
        const favorite = realm.objects('Favorites').filtered(`id=${data.id}`);
        realm.write(() => {
            realm.delete(favorite);
        });
    }

    async function handleActionFavorite() {
        try {
          if (isFavorite) {
            await removeFavorite();
          } else {
            await saveFavorite();
          }
          onCheckIsFavorite();
        } catch (error) {
            console.tron.log('saveFavorite - error ->', error);
        }
    }

    onCheckIsFavorite = () => {
        setIsFavorite(false);
        context.favorites.forEach(item => {
            if (item.id === mediaData.id) {
                setIsFavorite(true);
            }
        });
    }

    useEffect(() => {
        onCheckIsFavorite();
      }, [mediaData.id, context.favorites]);

    return (
        <Container>
            <TouchableOpacity onPress={() => handleActionFavorite()}>
                <Icon
                    name={`${OS}-heart${(isFavorite) ? '-dislike' : ''}`}
                    size={30}
                    color="#000"
                />
            </TouchableOpacity>
        </Container>
    );
};
