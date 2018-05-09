import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'

import Home from './screens/Home'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Home welcome='This is the home component'/>
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
