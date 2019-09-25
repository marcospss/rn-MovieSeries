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
    const [favorites, setFavorites] = useState([]);
    async function loadFavorites() {
        try {
            const response = await StorageHelper.getData();
            setFavorites([response]);
        } catch (error) {
            console.error(error);
        }
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
