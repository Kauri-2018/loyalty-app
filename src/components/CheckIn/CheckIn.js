import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

import t from 'tcomb-form-native'

const Form = t.form.Form

const CheckInForm = t.struct({
  username: t.String,
  password: t.String
})

export default class CheckIn extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Form type={CheckInForm} />
        <Button
          title="Check in"
          onPress={this.editWelcome}
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
    backgroundColor: '#ffffff'
  }
})
