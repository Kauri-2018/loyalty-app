// import React, {Component} from 'react'
// import { StyleSheet, View } from 'react-native'

// import App from '../App.js'

// export default class HomeScreen extends Component {
//   render () {
//     return (
//       <View style={styles.container}>
//         <App />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

import React, { Component } from 'react'

import { View } from 'react-native'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Login from '../components/Login'

export default class HomeScreen extends React.Component {
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