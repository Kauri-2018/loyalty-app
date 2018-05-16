import React, {Component} from 'react'
// import {View, Text} from 'react-native'
import {Content, Card, CardItem, Text, Body} from 'native-base'
import {connect} from 'react-redux'

class Profile extends Component {
  render () {
    const {name, photo_url, email, membership_type, membership_number} = this.props.profile
    return (
      <Content padder>
        <Card>
          <CardItem bordered>
            <Body>
              <Text>Name: {name}</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                  Email: {email}
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                Membership Type: {membership_type}
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                MemberShip Number: {membership_number}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.auth.profile || {}
  }
}

export default connect(mapStateToProps)(Profile)
