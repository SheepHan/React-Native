/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { StackNavigator, createBottomTabNavigator, TabBarBottom, DrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation'
import FlatListDemo from './pages/FlatListDemo'

const AppRoot = StackNavigator({
  App: {
    screen: App
  },
  FlatListDemo:{
    screen:FlatListDemo,
    navigationOptions:{
      title:"FlatListDemo"
    }
  }
  
})

AppRegistry.registerComponent(appName, () => AppRoot);
