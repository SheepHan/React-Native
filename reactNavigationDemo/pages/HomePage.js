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
export default class HomePage extends Component<Props> {
  // static navigationOptions = {
  //   title: "Home"
  // }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>欢迎</Text>
        <Button
          title="Go Page1"
          onPress={() => {
            navigation.navigate('Page1', { name: '动态的' })
          }}
        />
        <Button
          title="Go Page2"
          onPress={() => {
            navigation.navigate('Page2')
          }}
        />
        <Button
          title="Go Page3"
          onPress={() => {
            navigation.navigate('Page3',{title:''})
          }}
        />
        <Button
          title="Go TabNav"
          onPress={() => {
            navigation.navigate('TabNav',{title:''})
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
