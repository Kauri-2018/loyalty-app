import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'remote-redux-devtools'

import reducers from './src/store/reducers'
import HomeScreen from './src/screens/HomeScreen.js'
import ProfileScreen from './src/screens/ProfileScreen.js'

const composeEnhancers = composeWithDevTools({realtime: true})
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },{
  headerMode: 'none',
  },{
    initialRouteName: 'Home'
  }
)
