import React, { Component } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ScrollView } from 'react-native'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Login from '../components/Login'

export default class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
      <KeyboardAwareScrollView
      enableOnAndroid
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      >
        <Logo />
        <Banner />
        <Login navigation={this.props.navigation} />
        <Footer />
      </KeyboardAwareScrollView>
      </ScrollView>
    )
  }
}
