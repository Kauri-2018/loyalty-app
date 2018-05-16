import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styles from './styles'

export default class CheckInStatus extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text p> Succcessfully checked in! </Text>
        <Text h3> Welcome to Enspiral Dev Academy, [username] </Text>
      </ View>
    )
  }
} 
