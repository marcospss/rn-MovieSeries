import React, { Component, Fragment } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
  import { StackActions, NavigationActions } from 'react-navigation';
  
class SeriesScreen extends Component {
    render() {
      return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <StatusBar barStyle="dark-content" />
              <Text>Details Screen</Text>
              <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('MainTabs')}
              />
            </View>
          </SafeAreaView>
        </Fragment>
      );
    }  
}

export default SeriesScreen;