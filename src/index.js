if(__DEV__) {
    import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React, { useState, useEffect } from 'react';
import { StatusBar, YellowBox, SafeAreaView } from 'react-native';

import Navigation from './navigation';
import NavigationHelper from '~/helpers/Navigation';
import StorageHelper from '~/helpers/Storage';
import { ConfigContext } from '~/config/appContext';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: Async Storage has been extracted',
]);

export default App = () => {
    let favorites = [{"adult":false,"backdrop_path":"/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg","belongs_to_collection":{"id":404609,"name":"John Wick Collection","poster_path":"/pZ4hR5IIoHHfNjot9rq4F96OGAi.jpg","backdrop_path":"/fSwYa5q2xRkBoOOjueLpkLf3N1m.jpg"},"budget":55000000,"genres":[{"id":28,"name":"Action"},{"id":53,"name":"Thriller"},{"id":80,"name":"Crime"}],"homepage":"https://www.johnwick.movie","id":458156,"imdb_id":"tt6146586","original_language":"en","original_title":"John Wick: Chapter 3 – Parabellum","overview":"Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.","popularity":145.496,"poster_path":"/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg","production_companies":[{"id":491,"logo_path":"/rUp0lLKa1pr4UsPm8fgzmnNGxtq.png","name":"Summit Entertainment","origin_country":"US"},{"id":3528,"logo_path":"/cCzCClIzIh81Fa79hpW5nXoUsHK.png","name":"Thunder Road Pictures","origin_country":"US"},{"id":113619,"logo_path":null,"name":"87Eleven Productions","origin_country":""}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2019-05-15","revenue":318642310,"runtime":131,"spoken_languages":[{"iso_639_1":"zh","name":"普通话"},{"iso_639_1":"ja","name":"日本語"},{"iso_639_1":"ru","name":"Pусский"},{"iso_639_1":"la","name":"Latin"},{"iso_639_1":"en","name":"English"},{"iso_639_1":"ar","name":"العربية"},{"iso_639_1":"it","name":"Italiano"},{"iso_639_1":"id","name":"Bahasa indonesia"}],"status":"Released","tagline":"The Grace Period Is Over","title":"John Wick: Chapter 3 – Parabellum","video":false,"vote_average":7.1,"vote_count":2483, mediaType: 'movie'}];
    // const [favorites, setFavorites] = useState([]);
    // async function loadFavorites() {
    //     try {
    //         const response = await StorageHelper.getData();
    //         setFavorites([response]);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     loadFavorites();
    // }, []);

    return (
        <ConfigContext.Provider
            value={{
                favorites: favorites
            }}
        >
            <SafeAreaView style={{flex: 1}}>
                <StatusBar backgroundColor="#000" barStyle="light-content" />
                <Navigation 
                    ref={navigatorRef => {
                        NavigationHelper.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </SafeAreaView>
        </ConfigContext.Provider>
    )
};
