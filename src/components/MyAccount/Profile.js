import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class Profile extends Component {
  render () {
    const {name, photo_url, email, expiry_date, membership_type, membership_number} = this.props.profile
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Avatar Url: {photo_url}</Text>
        <Text>Email: {email}</Text>
        <Text>Expiry Date: {expiry_date}</Text>
        <Text>Membership Type: {membership_type}</Text>
        <Text>MemberShip Number: {membership_number}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.auth.profile || {}
  }
}

export default connect(mapStateToProps)(Profile)
