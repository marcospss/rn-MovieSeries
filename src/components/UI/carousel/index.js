import React from 'react';
import { FlatList } from 'react-native';

import { backdropImage } from '~/helpers/Image';
import DateHelper from '~/helpers/Date';

import { Container, Section, Backdrop, Header, Release, Title } from './styles';

const titleFormat = (title) => {
    return (title.length > 28) ? `${title.substring(0,28)}...` : title;
}

const Carousel = ({ data, title }) => {
    return (
        <Container>
            <Section>{ title }</Section>
            <FlatList 
                horizontal={true}
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Backdrop 
                        source={{uri: backdropImage(item.backdrop_path)}}
                        resizeMode="contain"
                    >
                        <Header>
                            <Title>{ titleFormat(item.title) }</Title>
                            <Release>{DateHelper.longFormat(item.release_date)}</Release>
                        </Header>
                    </Backdrop>
                )}
            />
        </Container>
    );
};

export default Carousel;