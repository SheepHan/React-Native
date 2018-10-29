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



export default class RefTest extends Component{
  state={
    size:30
  }
  getSize(){
    return this.state.size;
  }
  constructor(props){
    super(props);
  }
  render() {
    return <View>
      <Text style={{fontSize:40,color:'#000'}} 
        onPress={()=>{
          this.setState({
            size:this.state.size+10
          })
        }}
      >点击变大</Text>
       <Text style={{fontSize:40,color:'#000'}} 
        onPress={()=>{
          this.setState({
            size:this.state.size-10
          })
        }}
      >点击变小</Text>
      <Image style={{width:this.state.size,height:this.state.size}} source={require('./images/qiqiu.jpg')} />
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
