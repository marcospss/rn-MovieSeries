import React from 'react';
import { FlatList } from 'react-native';

import { backdropImage } from '~/helpers/Image';

import { Container, Backdrop, Header, Category, Title } from './styles';

const Carousel = ({ data }) => {
    return (
        <Container>
            <FlatList 
                horizontal={true}
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <>
                        <Backdrop source={{uri: backdropImage(item.backdrop_path) }}>
                            <Header>
                                <Title>{ item.title }</Title>
                                <Category>Adventure | Animation | Comedy | Family</Category>
                            </Header>
                        </Backdrop>
                    </>
                )}
            />
        </Container>
    );
};

export default Carousel;