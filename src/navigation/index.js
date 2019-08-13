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
      tabBarLabel: 'Movies',
    }
  },
  Series: {
    screen: SeriesStack,
    navigationOptions: {
      tabBarLabel: 'Series',
    }
  },
  Search: {
    screen: SearchStack,
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

const DetailsStack = createStackNavigator({
  DetailsMovies: {
    screen: DetailsMovies,
  },
  DetailsSeries: {
    screen: DetailsSeries,
  }
});

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
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