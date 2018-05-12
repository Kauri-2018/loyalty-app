import React, { Component } from 'react'
// import { ScrollView } from 'react-native'

import { View } from 'react-native'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Login from '../components/Login'

export default class HomeScreen extends Component {
  render () {
    return (
      <View >
        <Logo />
        <Banner />
        <Login navigation={this.props.navigation} />
        <Footer />
      </View>
    )
  }
}
