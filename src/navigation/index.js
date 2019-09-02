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

import Movies from '~/pages/Movies';
import Series from '~/pages/Series';
import Search from '~/pages/Search';
import Favorites from '~/pages/Favorites';
import Discover from '~/pages/Discover';
import { MoviesDetails, SeriesDetails } from '~/pages/Details';
import logo from '~/assets/images/imdb-logo.png';

Icon.loadFont();

const Hidden = () => null;

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
        onPress={() => navigation.navigate('Favorites')}
        name="heart"
        size={26}
        color="#fff"
      />
    ),
  })
};

const detailsNavigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Icon 
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.navigate('Home')}
        name="chevron-left"
        size={20}
        color="#fff"
      />
    ),
    title: navigation.getParam('title'),
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#efefef',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

const MoviesStack = createStackNavigator(
  {
    Movies: {
      screen: Movies,
    }
  },
  defaultNavigation
);

const MoviesDetailsStack = createStackNavigator(
  {
    MoviesDetails: {
      screen: MoviesDetails,
      navigationOptions: detailsNavigationOptions,
    }
  }
);

const SeriesStack = createStackNavigator(
  {
    Series: {
      screen: Series,
    }
  },
  defaultNavigation
);

const SeriesDetailsStack = createStackNavigator(
  {
    SeriesDetails: {
      screen: SeriesDetails,
      navigationOptions: detailsNavigationOptions,
    }
  }
);

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: Search,
    }
  },
  defaultNavigation
);

const DiscoverStack = createStackNavigator(
  {
    Discover: {
      screen: Discover,
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

// const DetailsStack = createStackNavigator({
//     MoviesDetails: {
//         screen: MoviesDetails,
//     },
//     SeriesDetails: {
//         screen: SeriesDetails,
//     }
// });

const MainDrawer = createDrawerNavigator(
  {
    Home: {
      screen: MainTabs,
      navigationOptions: {
        drawerIcon: (<Icon name='home' size={24} color="#000" />)
      }
    },
    Discover: {
      screen: DiscoverStack,
      navigationOptions: {
        drawerIcon: (<Icon name='search-plus' size={24} color="#000" />)
      }
    },
    Favorites: {
      screen: FavoritesStack,
      navigationOptions: {
        drawerIcon: (<Icon name='heart' size={24} color="#000" />)
      }
    },
    MoviesDetailsStack: {
      screen: MoviesDetailsStack,
      navigationOptions: {
        drawerLabel: <Hidden />,
      }
    },
    SeriesDetailsStack: {
      screen: SeriesDetailsStack,
      navigationOptions: {
        drawerLabel: <Hidden />,
      }
    },
    // DetailsScreens: {
    // screen: DetailsStack,
    //     navigationOptions: {
    //         drawerLabel: < Hidden /> ,
    //     }
    // }
  }
);

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    // DetailsScreens: {
    //     screen: DetailsStack,
    // }
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