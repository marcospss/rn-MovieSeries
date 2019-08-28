import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { backdropImage } from '~/helpers/Image';
import DateHelper from '~/helpers/Date';
import NavigationHelper from '~/helpers/Navigation';

import { Container, Section, Backdrop, Header, Release, Title } from './styles';

const titleFormat = (title) => {
    return (title.length > 28) ? `${title.substring(0,28)}...` : title;
}

Icon.loadFont();

const Carousel = ({ data, title, endListCarousel, showIconEndList }) => {
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
                            onPress={() => NavigationHelper.navigate('DetailsMovies')}
                            name="arrow-circle-right"
                            size={50}
                            color="#fff"
                        />
                }
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => NavigationHelper.navigate('DetailsMovies', {
                            mediaId: item.id,
                            title: item.title
                        })}
                    >
                        <Backdrop 
                            source={{uri: backdropImage(item.backdrop_path)}}
                            resizeMode="contain"
                        >
                            <Header>
                                <Title>{ titleFormat(item.title) }</Title>
                                <Release>{DateHelper.longFormat(item.release_date)}</Release>
                            </Header>
                        </Backdrop>
                    </TouchableOpacity>
                )}
            />
        </Container>
    );
};

export default Carousel;