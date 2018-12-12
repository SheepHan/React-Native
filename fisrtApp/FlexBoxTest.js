
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// 定义组件
import React, {Component} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';



export default class FlexBox extends Component{
  render() {
    return <View>
      <View style={ {flexDirection:'row',backgroundColor:"darkgray",marginTop:20,flexWrap:'wrap'}}>
        <View style={ {width:100,height:100,backgroundColor:"darkcyan",margin:5}}>
          <Text style={ {fontSize:16}}>1</Text>
        </View>
        <View style={ {width:100,height:100,backgroundColor:"darkcyan",margin:5}}>
          <Text style={ {fontSize:16}}>2</Text>
        </View>
        <View style={ {width:100,height:100,backgroundColor:"darkcyan",margin:5}}>
          <Text style={ {fontSize:16}}>3</Text>
        </View>
        <View style={ {width:100,height:100,backgroundColor:"darkcyan",margin:5}}>
          <Text style={ {fontSize:16}}>4</Text>
        </View>
      </View>
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
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
