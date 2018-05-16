import React, { Component } from 'react'
// import { ScrollView } from 'react-native'

import { Content } from 'native-base'

import Footer from '../components/Footer'
import Login from '../components/Login'
import Header from '../components/Header'

export default class HomeScreen extends Component {
  render () {
    return (
      <Content contentContainerStyle={{ 
        flexGrow: 1
      }}>
        <Header />
        <Login navigation={this.props.navigation} />
        <Footer />
      </ Content>
    )
  }
}
