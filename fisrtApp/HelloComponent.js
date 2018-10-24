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

// 组件定义
// 方式一：ES6方式
export default class HelloComponent extends Component{
  render() {
    return <Text style={{fontSize:40,backgroundColor:'red',color:'#fff'}}>hello{this.props.name}</Text>
  }
}


// 方式二：ES5
// var HelloComponent=React.createClass({
//   render() {
//     return <Text style={{fontSize:40,backgroundColor:'red',color:'#fff'}}>hello</Text>
//   }
// })
// module.exports=HelloComponent;


// 方式三： 函数式定义组件
// 无状态，不能使用this，没有一个完整意义的生命周期方法
// function HelloComponent(props){
//   return <Text style={{fontSize:40,backgroundColor:'red',color:'#fff'}}>hello{props.name}</Text>
// }
// module.exports=HelloComponent;

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
