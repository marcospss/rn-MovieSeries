import React, { Fragment } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import NavigationHelper from '~/helpers/Navigation';
import { Container, Title, Items, Poster } from './styles';

const ListMedia = () => {
    return (
        <Fragment>
            <Container>
                <Title>Last Movies</Title>
                <Items>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/qEnH5meR381iMpmCumAIMswcQw2.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/AblhtULOVtrkSnFxRPQ8gBemxw9.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/93Y9BGx8blzmZOPSoivkFfaifqU.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/2YiESGB68BGQSAFvfJxBi774sc4.jpg'}} />
                        </TouchableOpacity>
                    </ScrollView>
                </Items>
            </Container>
            <Container>
                <Title>Recommended For You</Title>
                <Items>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/qEnH5meR381iMpmCumAIMswcQw2.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/AblhtULOVtrkSnFxRPQ8gBemxw9.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/93Y9BGx8blzmZOPSoivkFfaifqU.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/2YiESGB68BGQSAFvfJxBi774sc4.jpg'}} />
                        </TouchableOpacity>
                    </ScrollView>
                </Items>
            </Container>
            <Container>
                <Title>Coming Soon</Title>
                <Items>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/qEnH5meR381iMpmCumAIMswcQw2.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/AblhtULOVtrkSnFxRPQ8gBemxw9.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/93Y9BGx8blzmZOPSoivkFfaifqU.jpg'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('Details')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/2YiESGB68BGQSAFvfJxBi774sc4.jpg'}} />
                        </TouchableOpacity>
                    </ScrollView>
                </Items>
            </Container>
        </Fragment>
    );
};

export default ListMedia;