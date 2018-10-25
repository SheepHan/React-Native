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

  //Mounting 只调用一次
  constructor(props) { //初始化组件
    super(props); //初始化Component
    console.log("constructor")
    this.state={
      count:0
    }
  }
  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }



//Updating  会调用多次
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


  //Unmounting 只调用一次
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }


  render() {
    console.log("render")
    return <View> 
      <Text 
        style={{fontSize:40,backgroundColor:'red',color:'#fff'}}
        onPress={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}
        >你点了{this.state.count}次hello</Text>
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
