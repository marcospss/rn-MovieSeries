import React from 'react';
import { 
  createAppContainer, 
  createStackNavigator,
  createSwitchNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator 
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Movies from '~/screens/Movies';
import Series from '~/screens/Series';
import Search from '~/screens/Search';
import Favorites from '~/screens/Favorites';
import { DetailsMovies, DetailsSeries } from '~/screens/Details';

const MoviesStack = createStackNavigator({
  Movies: {
    screen: Movies,
    navigationOptions: {
      header: null,
    }
  }
});

const SeriesStack = createStackNavigator({
  Series: {
    screen: Series,
    navigationOptions: {
      header: null,
    }
  }
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    }
  }
});

const FavoritesStack = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      header: null,
    }
  }
});

const MainTabs = createBottomTabNavigator({
  Movies: {
    screen: MoviesStack,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: ({ tintColor }) =>
        <Icon name='film' size={24} color={tintColor} />
    }
  },
  Series: {
    screen: SeriesStack,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: ({ tintColor }) =>
        <Icon name='tv' size={24} color={tintColor} />
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: ({ tintColor }) =>
        <Icon name='search' size={24} color={tintColor} />
    }
  }
},
{
  tabBarOptions: {
    initialRouteName: 'Movies',
    activeTintColor: '#fff',
    showLabel: false,
    style: {
      backgroundColor: '#000',
    },
  }
});

const DetailsStack = createStackNavigator({
  DetailsMovies: {
    screen: DetailsMovies,
  },
  DetailsSeries: {
    screen: DetailsSeries,
  }
});

const MainDrawer = createDrawerNavigator({
  Home: MainTabs,
  Favorites: FavoritesStack
});

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    DetailsMovies: {
      screen: DetailsStack,
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const App = createSwitchNavigator({
  DrawerNavigator: {
    screen: AppModalStack
  }
});

export default createAppContainer(App);