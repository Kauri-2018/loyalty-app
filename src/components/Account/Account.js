import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'

// All the props names correspond to PR coming in for web app!
// Except profile_url which needs to be profilePhoto

class Account extends Component {
  render () {
    return (
      <View
        style={styles.wrapper}>
        <Image
          source={this.props.user.profile_url}
          style={styles.profilePhoto}
        />
        <Text>Name: {this.props.user.name}</Text>
        <Text>Email: {this.props.user.email}</Text>
        <Text>Loyalty Number: {this.props.user.membershipNumber}</Text>
        <Text>Loyalty Number: {this.props.user.role}</Text>

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
