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


export default class LifecircleComponent extends Component{
  constructor(props) { //初始化组件
    super(props); //初始化Component
    console.log("constructor")
  }
  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps")
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log("shouldComponentUpdate")
    return true
  }

  componentWillUpdate(nextProps,nextState) {
    console.log("componentWillUpdate")
  }

  componentDidUpdate(nextProps,nextState) {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }


  render() {
    return <Text style={{fontSize:40,backgroundColor:'red',color:'#fff'}}>hello{this.props.name}</Text>
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
