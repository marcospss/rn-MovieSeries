import React from 'react';

import { Container, Backdrop, Header, Category, Title } from './styles';

const MainHighlight = () => {
    return(
        <Container>
            <Backdrop source={{uri: 'https://image.tmdb.org/t/p/w780/m67smI1IIMmYzCl9axvKNULVKLr.jpg'}}>
                <Header>
                    <Title>Toy Story 4</Title>
                    <Category>Category: Adventure | Animation | Comedy | Family</Category>
                </Header>
            </Backdrop>
        </Container>
    );
};

export default MainHighlight;