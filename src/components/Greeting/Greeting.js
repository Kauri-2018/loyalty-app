import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Greeting extends Component {
    render () {
      return (
				<View style={styles.container}>
				<Text> Welcome, Tori! </ Text>
				</ View>
			)
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
})