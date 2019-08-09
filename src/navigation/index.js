import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Movies from '~/screens/Movies';
import Series from '~/screens/Series';
import Favorites from '~/screens/Favorites';
import Details from '~/screens/Details';

const DetailsStack = createStackNavigator(
  {
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
    }
  }
);

const MoviesStack = createStackNavigator(
  {
    Movies: {
      screen: Movies,
      navigationOptions: {
        header: null,
      }
    }
  }
);

const SeriesStack = createStackNavigator({
  Series: {
    screen: Series,
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

const TabNavigator = createBottomTabNavigator(
  {
    Movies: {
      screen: MoviesStack,
      navigationOptions: {
        tabBarLabel: 'Movies',
        borderTopColor: '#605F60'
      }
    },
    Series: {
      screen: SeriesStack,
      navigationOptions: {
        tabBarLabel: 'Series',
      }
    },
    Favorites: {
      screen: FavoritesStack,
      navigationOptions: {
        tabBarLabel: 'Favorites',
      }
    }
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: '#fff',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: '#000',
      },
    }
  }
);

const TabsStackNavigator = createStackNavigator({
  TabNavigator: TabNavigator
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabsStackNavigator
  }
});

export default createAppContainer(createSwitchNavigator({
  Home: { screen: DrawerNavigator },
  Details: { screen: DetailsStack }
}));