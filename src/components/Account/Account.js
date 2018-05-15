import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'

class Account extends Component {
  render () {
    return (
      <View
        style={styles.wrapper}>
        <Image
          source={this.props.user.profilePhoto}
          style={styles.profilePhoto}
        />
        <Text>Name: {this.props.user.name}</Text>
        <Text>Email: {this.props.user.email}</Text>
        <Text>Loyalty Number: {this.props.user.membershipNumber}</Text>
        <Text>Expiry Date: {this.props.user.expiryDate}</Text>

      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Account)
