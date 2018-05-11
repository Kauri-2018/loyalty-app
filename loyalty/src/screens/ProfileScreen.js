// import React, {Component} from 'react'
// import { StyleSheet, View } from 'react-native'

// import App2 from '../App2.js'

// export default class ProfileScreen extends Component {
//   render () {
//     return (
//       <View style={styles.container}>
//         <App2 />
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

import React from 'react'

import { ScrollView } from 'react-native'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Greeting from '../components/Greeting'
import ProfileImg from '../components/ProfileImg'
import CheckIn from '../components/CheckIn'
import VisitCounter from '../components/VisitCounter'
import ProfileNav from '../components/ProfileNav'


export default class App2 extends React.Component {
  render() {
    return (
      <ScrollView>
        <Logo />
        <Banner />
        <Greeting />
        <ProfileImg />
        <CheckIn />
        <VisitCounter />
        <ProfileNav />
        <Footer />
      </ ScrollView>
    )
  }
}
