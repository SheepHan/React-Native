/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  Image,
  View,
  Platform,
  Button
} from 'react-native';


type Props = {};
export default class Page5 extends Component<Props> {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>欢迎来到 Page5</Text>
        <Button
          title="Toggle Drawer"
          onPress={() => {
            navigation.toggleDrawer()
          }} />
           <Button
          title="Close Drawer"
          onPress={() => {
            navigation.closeDrawer()
          }} />
        <Button
          title="Go to Page5"
          onPress={() => {
           
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
