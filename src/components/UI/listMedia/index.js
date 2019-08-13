import React, { Fragment } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import NavigationHelper from '~/helpers/Navigation';
import { Container, Section, Items, Poster, Title, ReleaseDate } from './styles';

const ListMedia = () => {
    return (
        <Fragment>
            <Container>
                <Section>Last Movies</Section>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/qEnH5meR381iMpmCumAIMswcQw2.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/AblhtULOVtrkSnFxRPQ8gBemxw9.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/93Y9BGx8blzmZOPSoivkFfaifqU.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/2YiESGB68BGQSAFvfJxBi774sc4.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                    </ScrollView>
            </Container>
            <Container>
                <Section>Recommended For You</Section>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/qEnH5meR381iMpmCumAIMswcQw2.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/qEnH5meR381iMpmCumAIMswcQw2.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/qEnH5meR381iMpmCumAIMswcQw2.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/AblhtULOVtrkSnFxRPQ8gBemxw9.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/93Y9BGx8blzmZOPSoivkFfaifqU.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/2YiESGB68BGQSAFvfJxBi774sc4.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/2YiESGB68BGQSAFvfJxBi774sc4.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/2YiESGB68BGQSAFvfJxBi774sc4.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                    </ScrollView>
            </Container>
            <Container>
                <Section>Coming Soon</Section>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/qEnH5meR381iMpmCumAIMswcQw2.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/AblhtULOVtrkSnFxRPQ8gBemxw9.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/93Y9BGx8blzmZOPSoivkFfaifqU.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationHelper.navigate('DetailsMovies')}>
                            <Poster source={{uri: 'https://image.tmdb.org/t/p/w92/2YiESGB68BGQSAFvfJxBi774sc4.jpg'}} />
                            <Title>Spider-Man: Far from Home F...</Title>
                        </TouchableOpacity>
                    </ScrollView>
            </Container>
        </Fragment>
    );
};

export default ListMedia;