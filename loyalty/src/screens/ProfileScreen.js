import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'

import App2 from '../App2.js'

export default class ProfileScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <App2 />
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
