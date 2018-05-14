import React, {Component} from 'react'
import { View, Button } from 'react-native'
// import {connect} from 'react-redux'

import Account from '../components/Account'

export default class AccountScreen extends Component {
  render () {
    return (
      <View>
        <Account />
        <Button
          navigation={this.props.navigation.navigate('Home')}
          title="Back"
        />
      </View>
    )
  }
}
