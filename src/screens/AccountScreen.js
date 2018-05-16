import React, {Component} from 'react'
import { View, Button } from 'react-native'
// import {connect} from 'react-redux'

import Account from '../components/Account'
import Header from '../components/Header'
import ProfileImg from '../components/ProfileImg'

export default class AccountScreen extends Component {
  render () {
    return (
      <View>
        <Header />
        <ProfileImg />
        <Account />
        {/* <Button
          onPress={this.props.navigation.navigate('Profile')}
          title="Back"
        /> */}
      </View>
    )
  }
}
