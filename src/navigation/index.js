import { 
  createAppContainer, 
  createStackNavigator,
  createSwitchNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator 
} from 'react-navigation';

import Movies from '~/screens/Movies';
import Series from '~/screens/Series';
import Search from '~/screens/Search';
import Favorites from '~/screens/Favorites';
import Details from '~/screens/Details';

const StackHomeTabs = createBottomTabNavigator({
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
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
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

const StackAppNavigation = createStackNavigator({
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
  Home: {
    screen: StackHomeTabs,
    navigationOptions: {
      header: null,
    }
  }
},
{  
  initialRouteName: 'Home'
});

const Navigation = createSwitchNavigator({
  Home: StackHomeTabs,
  AppNavigation: StackAppNavigation,
},{
  initialRouteName: 'Home'
});

export default createAppContainer(Navigation);