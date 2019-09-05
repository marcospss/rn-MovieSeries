import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { backdropImage } from '~/helpers/Image';
import DateHelper from '~/helpers/Date';
import NavigationHelper from '~/helpers/Navigation';

import { Container, Section, Backdrop, Header, Release, Title } from './styles';

const titleFormat = item => {
    const title = (item.title) ? item.title : item.name;
    return (title.length > 28) ? `${title.substring(0,28)}...` : title;
}

const release = (item, mediaType) => {
    const dateMedia = (item.release_date) ? item.release_date : item.first_air_date;
    return `${mediaType === 'movie' ? 'Release Date' : 'First Air Date'}: ${DateHelper.longFormat(dateMedia)}`;
}

Icon.loadFont();

const Carousel = ({ data, title, endListCarousel, showIconEndList, mediaType, routeName }) => {
    return (
        <Container>
            <Section>{ title }</Section>
            <FlatList 
                horizontal={true}
                data={data}
                keyExtractor={item => String(item.id)}
                onEndReachedThreshold={0.1}
                onEndReached={() => showIconEndList()}
                ListFooterComponent={
                    endListCarousel
                    && <Icon 
                            style={{ padding: 60, backgroundColor: '#cccccc52' }}
                            onPress={() => NavigationHelper.navigate('Discover', {
                                mediaType
                            })}
                            name="arrow-circle-right"
                            size={50}
                            color="#fff"
                        />
                }
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => NavigationHelper.navigate(routeName, {
                            mediaId: item.id,
                            title: (item.title) ? item.title : item.name,
                        })}
                    >
                        <Backdrop 
                            source={{uri: backdropImage(item.backdrop_path)}}
                            resizeMode="contain"
                        >
                            <Header>
                                <Title>{ titleFormat(item) }</Title>
                                <Release>{ release(item, mediaType) }</Release>
                            </Header>
                        </Backdrop>
                    </TouchableOpacity>
                )}
            />
        </Container>
    );
};

export default Carousel;