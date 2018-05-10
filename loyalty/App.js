import React from 'react'

import { StyleSheet, View } from 'react-native'

import Banner from './src/components/Banner'
import Footer from './src/components/Footer'
import Logo from './src/components/Logo'
import Login from './src/components/Login'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Logo />
        <Banner />
        <Login />
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
