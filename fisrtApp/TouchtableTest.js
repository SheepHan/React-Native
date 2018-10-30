
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// 定义组件
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Alert} from 'react-native';



export default class FlexBox extends Component{
  constructor (props) {
    super(props)
    this.state={
      count:0
    }
  }
  render() {
    return <View>
      <TouchableWithoutFeedback 
       onPress={()=>{
        this.setState({count:this.state.count+1})
      }}
      onLongPress={()=>{
        Alert.alert('提示','确认删除吗？',[
          {text:"取消",onPress:()=>{},style:'cancel'},
          {text:'确认',onPress:()=>{}}
        ])
      }
      }>
       <View style={styles.button}>
        <Text style={styles.buttonText}>
          我是TouchableWithoutFeddback,单击我了{this.state.count}次
        </Text>
       </View>
      </TouchableWithoutFeedback>
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
