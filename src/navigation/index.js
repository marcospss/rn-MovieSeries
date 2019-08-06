import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

import Movies from '~/screens/Movies';
import Series from '~/screens/Series';
import Favorites from '~/screens/Favorites';
import Details from '~/screens/Details';

const AppNavigation = createStackNavigator({
  Details: {
    screen: Details,
  }
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#efefef',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const MainTabs = createBottomTabNavigator({
  Movies: {
    screen: Details,
    navigationOptions: {
      tabBarLabel: "Movies"
    }
  },
  Series: {
    screen: Series,
    navigationOptions: {
      tabBarLabel: "Series"
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: "Favorites"
    }
  }
},{
  tabBarOptions: {
    initialRouteName: 'Movies',
    activeTintColor: '#fff',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: '#000',
    },
  }
});

const App = createSwitchNavigator({
  MainTabs: {
    screen: MainTabs
  },
  AppNavigation: {
    screen: AppNavigation
  }
});

export default createAppContainer(App);