import React from 'react'

import { View } from 'react-native'

import Banner from './src/components/Banner'
import Footer from './src/components/Footer'
import Logo from './src/components/Logo'
import Login from './src/components/Login'

export default class App extends React.Component {
  render () {
    return (
      <View >
        <Logo />
        <Banner />
        <Login />
        <Footer />
      </View>
    )
  }
}
