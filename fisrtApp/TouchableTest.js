
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// 定义组件
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Alert,TouchableHighlight,TouchableNativeFeedback} from 'react-native';



export default class Touchable extends Component{
  constructor (props) {
    super(props)
    this.state={
      count:0,
      countLong:0,
      waiting:false,
      text:''
    }
  }
  render() {
    return <View>
   <TouchableNativeFeedback
    onPress={()=>{
        this.setState({count: this.state.count + 1})
    }}
    background={TouchableNativeFeedback.SelectableBackground()}>
    <View>
        <Text>TouchableNativeFeedback</Text>     
    </View> 
    </TouchableNativeFeedback>
    <Text style={styles.text}>{this.state.text}</Text>  
  </View> 
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
