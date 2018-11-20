import { StackNavigator,  createBottomTabNavigator ,TabBarBottom } from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import React from 'react'
import { Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// TabBarComponent 组件,隶属于TabNavigator这个层次的，但是从React的Component中引入
class TabBarComponent extends React.Component{
  constructor(props){
    super(props);
    this.theme={
      tintColor:props.activeTintcolor,
      updateTime:new Date().getTime()
    };
  }
  render () {
    const {routes,index}=this.props.navigationState;
    const {theme}=routes[index].params;
    if (theme && theme.updateTime > this.theme.updateTime){
      this.theme=theme;
    }
    return <TabBarBottom
      {...this.props}
      activeTintColor={this.theme.tintColor||this.props.activeTintColor}
    />
  }
}

// TabNavigator 组件
export const AppTabNavigator = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon 
          name={focused ? 'md-home' : 'md-home-outline'}
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
        <Icon 
          name={focused ? 'md-people' : 'md-people-outline'}
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
        <Icon 
          name={focused ? 'md-add' : 'md-add-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
},
{
  tabBarComponent:TabBarComponent
});



// StackNavigator 组件
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
  },
  TabNav:{
    screen:AppTabNavigator,
    navigationOptions: {
      title: "This is TabNavigator的导航页"
    }
  }
}, {
    navigationOptions: { // 禁用导航栏
      // header: null
    }
  })