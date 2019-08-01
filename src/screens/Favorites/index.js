import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';

class FavoritesScreen extends Component {
    render() {
      const { navigation } = this.props;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

export default FavoritesScreen;