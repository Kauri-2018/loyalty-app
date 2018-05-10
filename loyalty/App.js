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
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import ProfileScreen from './src/screens/ProfileScreen.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileScreen />
      </View>
    )
  }
}

module.exports = createStackNavigator({
  Profile: {
    screen: ProfileScreen
  },
})

const styles = StyleSheet.create ({ 
  container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
  } 
})
