import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
// import NavigationBar from './NavigationBar'

export default class Girl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      what: ''
    }
  }

  // renderButton(image) {
  //   return <TouchableOpacity
  //     style={{ padding: 8 }}
  //     onPress={() => {
  //       this.props.navigator.pop();
  //     }}>
  //     <Image
  //       style={{ width: 26, height: 26, tintColor: 'white' }}
  //       source={image} />
  //   </TouchableOpacity>;
  // }

  render() {
   
    return (
      <View style={styles.container}>
        {/* <NavigationBar
          title='Girl'
          // style={{ backgroundColor: '#F08080' }}
          leftButton={this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))}
          rightButton={this.renderButton(require('./res/images/ic_star.png'))}
        /> */}
        <Text style={styles.tips}>页面C.</Text>
        <Text style={styles.tips}>我收到了页面B的信息:{this.props.what}</Text>
        <Text style={styles.tips} onPress={() => {
          this.props.onCallback('邮件信息toB');
          this.props.navigator.pop();
        }}>
          回信，给页面B回信
                </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
  tips: {
    fontSize: 18
  },
})

