import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'

import App from '.'

export default class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <App />
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
