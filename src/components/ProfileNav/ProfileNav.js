import React, {Component} from 'react'
import { View, Button } from 'react-native'

export default class ProfileNav extends Component {
  render () {
    return (
      <View>
        <Button
          title="My Account"
          onPress={this.loadAccount}
        />
        <Button
          title="Visit History"
          onPress={this.loadHistory}
        />
        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </ View>
    )
  }
}
