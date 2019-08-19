import React from 'react';
import { Image } from 'react-native';
import { 
  createAppContainer, 
  createStackNavigator,
  createSwitchNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator 
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigationHelper from '~/helpers/Navigation';
import Movies from '~/screens/Movies';
import Series from '~/screens/Series';
import Search from '~/screens/Search';
import Favorites from '~/screens/Favorites';
import { DetailsMovies, DetailsSeries } from '~/screens/Details';
import logo from '~/assets/images/imdb-logo.png';

const defaultNavigation = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: ({ navigation }) => ({
    headerTitle: <Image source={logo} />,
    headerStyle: {
      backgroundColor: '#000'
    },
    headerLeft: (
      <Icon 
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}
        name="bars"
        size={26}
        color="#fff"
      />
    ),
    headerRight: (
      <Icon 
        style={{ paddingLeft: 10 }}
        onPress={() => NavigationHelper.navigate('Favorites')}
        name="heart"
        size={26}
        color="#fff"
      />
    ),
  })
};

const MoviesStack = createStackNavigator(
  {
    Movies: {
      screen: Movies,
    }
  },
  defaultNavigation
);

const SeriesStack = createStackNavigator(
  {
    Series: {
      screen: Series,
    }
  },
  defaultNavigation
);

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: Search,
    }
  },
  defaultNavigation
);

const FavoritesStack = createStackNavigator(
  {
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        header: null,
      }
    }
  }
);

const MainTabs = createBottomTabNavigator(
  {
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
  }
);

const DetailsStack = createStackNavigator(
  {
    DetailsMovies: {
      screen: DetailsMovies,
    },
    DetailsSeries: {
      screen: DetailsSeries,
    }
  }
);

const MainDrawer = createDrawerNavigator(
  {
    Home: {
      screen: MainTabs,
      navigationOptions: {
        drawerIcon: (<Icon name='home' size={24} color="#000" />)
      }
    },
    Favorites: {
      screen: FavoritesStack,
      navigationOptions: {
        drawerIcon: (<Icon name='heart' size={24} color="#000" />)
      }
    }
  }
);

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    DetailsScreens: {
      screen: DetailsStack,
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      DrawerNavigator: {
        screen: AppModalStack
      }
    }
  )
);