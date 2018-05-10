import React, {Component} from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default class ProfileNav extends React.Component {
    render() {
        return (
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
          onPress={this.logout}
          />
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