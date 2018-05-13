import React, { Component } from 'react'
// import { ScrollView } from 'react-native'

import { Content } from 'native-base'

// import Banner from '../components/Banner'
import Footer from '../components/Footer'
// import Logo from '../components/Logo'
import Login from '../components/Login'
import Header from '../components/Header'

export default class HomeScreen extends Component {
  render () {
    return (
      <Content>
        <Header />
        {/* <Logo /> */}
        {/* <Banner /> */}
        <Login navigation={this.props.navigation} />
        <Footer />
      </ Content>
    )
  }
}
