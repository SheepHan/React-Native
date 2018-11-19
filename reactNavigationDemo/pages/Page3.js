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
  Button,
  TextInput
} from 'react-native';


type Props = {};
export default class Page3 extends Component<Props> {
  render() {
    const {navigation} = this.props
    // const { state, setParams } = navigation;
    // const { params } = state;
    // const showText=params.mode==='edit'?'正在编辑':'编辑完成'
    return (  
      <View style={styles.container}>
        <Text>欢迎来到 Page3</Text>
        <Button
          title="Go Back"
          onPress={()=>{
            navigation.goBack()
          }}/>
          {/* <Text>{showText}</Text> */}
          {/* <TextInput style={styles.input}
          onChangeText={text=>{
            setParams({title:text})
          }}
          /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    width:100,
    height:50,
    borderWidth:1,
    marginTop:20,
    borderColor:'black'
  },
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
