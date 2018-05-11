// import React from 'react'

// import { View, ScrollView } from 'react-native'

// import Banner from './src/components/Banner'
// import Footer from './src/components/Footer'
// import Logo from './src/components/Logo'
// import Login from './src/components/Login'

// export default class App extends React.Component {
//   render () {
//     return (
//       <View >
//         <Logo />
//         <Banner />
//         <Login />
//         <Footer />
//       </View>
//     )
//   }
// }

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen.js'
import ProfileScreen from './src/screens/ProfileScreen.js'


class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <HomeScreen />
      </ScrollView>
    )
  }
}

module.exports = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
})

const styles = StyleSheet.create ({ 
  container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
  } 
})
