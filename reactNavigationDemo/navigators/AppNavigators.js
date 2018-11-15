import { StackNavigator } from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'

export const AppStackNavigator = StackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions:{
      title: "Home"
    }
  },
  Page1: {
    screen: Page1,
    navigationOptions:{
      title: "Page1"
    }
  },
  Page2: {
    screen: Page2
  }
}, {
    navigationOptions: { // 禁用导航栏
      header: null
    }
  })