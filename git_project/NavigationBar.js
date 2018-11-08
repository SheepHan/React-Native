import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native'

import PropTypes from 'prop-types'

const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = 20;

export default class NavigationBar extends Component {
  static propTypes = {
    style: PropTypes.style,
    // style: ViewPropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hide: false
    };
  }

  render() {
    let titleView = this.props.titleView ? this.props.titleView :
      <Text>{this.props.title}</Text>;

    let content =
      <View style={styles.navBar}>
        {this.props.leftButton}
        {titleView}
        {this.props.rightButton}
      </View>;
    return (
      <View style={styles.container}>
        {content}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
  },
  // navBarTitleContainer: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   position: 'absolute',
  //   left: 40,
  //   top: 0,
  //   right: 40,
  //   bottom: 0,
  // },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  // navBarButton: {
  //   alignItems: 'center',
  // },
  // statusBar: {
  //   height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,

  // },
})