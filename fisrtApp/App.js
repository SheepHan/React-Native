/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HelloComponent from './HelloComponent'
import LifecircleComponent from './LifecircleComponent'
import PropsTest from './PropsTest'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu or Ctrl + M  button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() { 
    var params={name="小张",age:18,sex:"男"}
    var {name,sex}=params //解构赋值
    return (
      <View style={styles.container}>
        <PropsTest 
          // name={params.name}
          // age={params.age}
          // sex={params.sex}


          // {...params}  //延展操作符

          name={name}
          sex={sex}
        >
        </PropsTest>
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
