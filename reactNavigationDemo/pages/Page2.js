/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
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
export default class Page2 extends Component<Props> {
  render() {
    const {navigation} = this.props
    return (  
      <View style={styles.container}>
        <Text>欢迎来到 Page2</Text>
        <Button
          title="Go Back"
          onPress={()=>{
            navigation.goBack()
          }}/>
            <Button
          title="改变主题"
          onPress={()=>{
            navigation.setParams({
              theme:{
                tintColor:'red',
                updateTime:new Date().getTime()
              }
            })
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
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
