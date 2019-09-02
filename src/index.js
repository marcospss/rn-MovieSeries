if(__DEV__) {
    import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react';
import { StatusBar, YellowBox, SafeAreaView } from 'react-native';

import Navigation from './navigation';
import NavigationHelper from '~/helpers/Navigation';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: Async Storage has been extracted',
]);

export default App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <Navigation 
                ref={navigatorRef => {
                    NavigationHelper.setTopLevelNavigator(navigatorRef);
                }}
            />
        </SafeAreaView>
    )
};
