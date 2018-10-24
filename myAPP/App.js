import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Blink text='just red' style={styles.red}/>
        <Blink text='just bigblue' style={styles.bigblue}/>
        <Blink text='bigblue, then red' style={[styles.bigblue, styles.red]}/>
        <Blink text='red, then bigblue' style={[styles.red, styles.bigblue]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
