if(__DEV__) {
    import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React, { useState, useEffect } from 'react';
import { StatusBar, YellowBox, SafeAreaView } from 'react-native';

import Navigation from './navigation';
import NavigationHelper from './helpers/Navigation';
import { ConfigContext } from './config/appContext';
import getRealm from './services/Realm';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: Async Storage has been extracted',
]);

export default App = () => {
    const [favorites, setFavorites] = useState([]);

    async function loadFavorites() {
        const realm = await getRealm();
        const data = realm.objects('Favorites').sorted('title', true);
        console.tron.log('loadFavorites -> ', data);
        setFavorites(data);
    };

    useEffect(() => {
        loadFavorites();
    }, []);

    return (
        <ConfigContext.Provider
            value={{
                favorites
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
