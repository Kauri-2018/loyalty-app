import React from 'react'

import { View } from 'react-native'

import Banner from './src/components/Banner'
import Footer from './src/components/Footer'
import Logo from './src/components/Logo'

export default class App2 extends React.Component {
  render() {
    return (
      <View>
        <Logo />
        <Banner />
        <Greeting />

        <Footer />
      </View>
    )
  }
}