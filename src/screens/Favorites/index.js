import React, { Component, Fragment } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
  import { StackActions, NavigationActions } from 'react-navigation';

class FavoritesScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

export default FavoritesScreen;