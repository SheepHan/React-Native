/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View ,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      selectedTab:'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle={{color:'red'}}
            title="最热"
            renderIcon={() => <Image style={styles.img} source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.img,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
            badgeText="10"
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            selectedTitleStyle={{color:'red'}}
            title="趋势"
            renderIcon={() => <Image style={styles.img} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.img,{tintColor:'red'}]} source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            selectedTitleStyle={{color:'green'}}
            title="收藏"
            renderIcon={() => <Image style={styles.img} source={require('./res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.img,{tintColor:'red'}]} source={require('./res/images/ic_favorite.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page3}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            selectedTitleStyle={{color:'green'}}
            title="我的"
            renderIcon={() => <Image style={styles.img} source={require('./res/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={[styles.img,{tintColor:'red'}]} source={require('./res/images/ic_my.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_my'})}>
            <View style={styles.page4}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:'red'
  },
  page2:{
    flex:1,
    backgroundColor:'yellow'
  },
  page3:{
    flex:1,
    backgroundColor:'blue'
  },
  page4:{
    flex:1,
    backgroundColor:'green'
  },
  img:{
    width:22,
    height:22
  }
});
