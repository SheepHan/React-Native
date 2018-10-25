/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// 定义组件
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import propTypes from 'prop-types'


export default class PropsTest extends Component{
  static defaultProps={
    name:"小红",
    age:20,
    sex:"女"
  }
  static propTypes={
    name:propTypes.string,
    age:propTypes.number,
    sex:propTypes.string.isRequired
  }
  render() {
    return <View>
      <Text style={{fontSize:40,backgroundColor:'red',color:'#fff'}}>hello{this.props.name}</Text>
      <Text style={{fontSize:40,backgroundColor:'red',color:'#fff'}}>hello{this.props.age}</Text>
      <Text style={{fontSize:40,backgroundColor:'red',color:'#fff'}}>hello{this.props.sex}</Text>
    </View>
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
