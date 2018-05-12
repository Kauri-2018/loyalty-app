import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class CheckInStatus extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text p> Succcessfully checked in! </Text>
        <Text h3> Welcome to the zoo, [username] </Text>
      </ View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  }
})
