import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
  import { StackActions, NavigationActions } from 'react-navigation';

class MoviesScreen extends Component {
    render() {
      return (
        <Fragment>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Home Screen</Text>
              <Button
                title="Go to Details"
                onPress={() => {
                  this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Details' })
                    ],
                  }))
                }}
              />
            </View>
          </SafeAreaView>
        </Fragment>
      );
    }  
}

export default MoviesScreen;