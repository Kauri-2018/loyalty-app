import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'remote-redux-devtools'

import reducers from './store/reducer'
import HomeScreen from './src/screens/HomeScreen.js'
import ProfileScreen from './src/screens/ProfileScreen.js'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
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
  },
  {
    initialRouteName: 'Home'
  }
)
