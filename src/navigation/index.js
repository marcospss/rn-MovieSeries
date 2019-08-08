import { 
  createAppContainer, 
  createStackNavigator,
  createSwitchNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator 
} from 'react-navigation';

import Movies from '~/screens/Movies';
import Series from '~/screens/Series';
import Favorites from '~/screens/Favorites';
import Details from '~/screens/Details';

const MainTabs = createBottomTabNavigator({
  Movies: {
    screen: Movies,
    navigationOptions: {
      tabBarLabel: 'Movies',
    }
  },
  Series: {
    screen: Series,
    navigationOptions: {
      tabBarLabel: 'Series',
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'Favorites',
    }
  }
},
{
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

const AppNavigation = createStackNavigator({
  Details: {
    screen: Details,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#efefef',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  MainTabs: {
    screen: MainTabs,
    navigationOptions: {
      header: null,
    }
  }
},
{  
  initialRouteName: 'MainTabs'
});

const Navigation = createSwitchNavigator({
  MainTabs: MainTabs,
  AppNavigation: AppNavigation,
},{
  initialRouteName: 'MainTabs'
});

export default createAppContainer(Navigation);