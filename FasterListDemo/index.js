/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { createStackNavigator,createAppContainer  } from 'react-navigation'
import FlatListDemo from './pages/FlatListDemo'

const AppRoot = createStackNavigator({
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


// const AppContainer = createAppContainer(AppRoot);

// AppRegistry.registerComponent(appName, () => AppContainer);
