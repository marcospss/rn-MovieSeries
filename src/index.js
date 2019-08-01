import React from 'react';
import Navigation from './navigation';
import NavigationHelper from '~/helpers/Navigation';

const App = () => <Navigation 
    ref={navigatorRef => {
        NavigationHelper.setTopLevelNavigator(navigatorRef);
    }}
/>;

export default App;
