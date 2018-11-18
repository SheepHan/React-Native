import { StackNavigator, TabNavigator } from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import React from 'react'
import { Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const AppTabNavigator = TabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Page2',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'Page3',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  }
});
export const AppStackNavigator = StackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: "Home"
    }
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name + '页面',
    })
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      title: "Page2"
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: (props) => {
      const { navigation } = props;
      const { state, setParams } = navigation;
      const { params } = state;
      return {
        title: params.title ? params.title : 'This is Page3',
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() => {
              setParams({ mode: params.mode === 'edit' ? "" : 'edit' })
            }}
          />
        )
      }
    }
  }
}, {
    navigationOptions: { // 禁用导航栏
      // header: null
    }
  })