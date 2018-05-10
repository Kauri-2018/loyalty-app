import React, { Component } from 'react'
import { View, Button, Stylesheet } from 'react-native'

export default class CheckIn extends React.Component {
    render() {
        return (
          <View style={styles.container}>
           <Button
             title="Check in"
             onPress={this.handleSubmit}
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