import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default class CheckIn extends React.Component {
    render() {
        return (
          <View style={styles.container}>
           <Button
             title="Check in"
             onPress={this.openCamera}
             />
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