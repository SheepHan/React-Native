import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import PageC from './PageC'
import PageA from './PageA'
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
    let what = this.state.what === '' ? '' : '收到了C的来信：' + this.state.what
    return (

      <View style={styles.container}>
        {/* <NavigationBar
          title='Girl'
          // style={{ backgroundColor: '#F08080' }}
          leftButton={this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))}
          rightButton={this.renderButton(require('./res/images/ic_star.png'))}
        /> */}
        <Text style={styles.tips}>页面B.</Text>
        <Text style={styles.tips}>我收到了页面A的信息:{this.props.what}</Text>
        <Text style={styles.tips} onPress={() => {

          this.props.navigator.push({
            component: PageC,
            name: 'PageC',
            params: {
              what: '邮件信息toC',
              onCallback: (what) => {
                this.setState({
                  what: what
                })
              }
            }
          })
        }}>
          给页面C写信
        </Text>
        <Text style={styles.tips} onPress={() => {
          this.props.onCallback('邮件信息toA');
          this.props.navigator.pop();
        }}>
          回信，给页面A回信
                </Text>
        <Text style={styles.tips}>{what}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  tips: {
    fontSize: 18
  },
})

