import React, {Component} from 'react'
import { View, Button, StyleSheet } from 'react-native'

import t from 'tcomb-form-native'

const Form = t.form.Form

const User = t.struct({
  username: t.String,
  password: t.String
})

export default class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Form type={User} />
        <Button
          title="Log in"
          onPress={() => this.props.navigation.navigate('Profile')}
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
