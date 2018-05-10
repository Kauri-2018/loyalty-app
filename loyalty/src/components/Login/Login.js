import React, {Component} from 'react'
import { View, TextInput, Text, Button } from 'react-native'

export default class Login extends Component {
  render () {
    return (
      <View >
        <Text h1> Login to your account </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }} >
          Username:
        </TextInput>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }} >
          Password:
        </TextInput>
        <Button
          // onPress={onPressLogin}
          title='Login'
          color='#841584' />
      </View>
    )
  }
}
