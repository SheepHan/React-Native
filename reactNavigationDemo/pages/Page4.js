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
export default class Page4 extends Component<Props> {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>欢迎来到 Page4</Text>
        <Button
          title="Open Drawer"
          onPress={() => {
            navigation.openDrawer()
          }} />
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
            navigation.navigate('Page5')
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
    backgroundColor: 'red',
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
