import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'

class Greeting extends Component {
  render () {
    return (
      <View style={styles.container}>
        {this.props.isAuth && 
        <Text style={styles.text}> 
        Hi, {this.props.user.name}! 
        Enter today's passcode below to check in. 
        </Text>}
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
export default connect(mapStateToProps)(Greeting)
