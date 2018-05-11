import React from 'react'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen.js'
import ProfileScreen from './src/screens/ProfileScreen.js'

export default class App extends React.Component {
  render () {
    return <RootStack />
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Home'
  }
)
