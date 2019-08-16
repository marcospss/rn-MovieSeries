import React from 'react';
import {YellowBox} from 'react-native';

import Navigation from './navigation';
import NavigationHelper from '~/helpers/Navigation';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

const App = () => <Navigation 
    ref={navigatorRef => {
        NavigationHelper.setTopLevelNavigator(navigatorRef);
    }}
/>;

export default App;
