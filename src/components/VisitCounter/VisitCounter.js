import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'

const VisitCounter = ({isCheckedin, count, user}) => (
  <View style={styles.container}>
    {isCheckedin && [
      <Text 
      key="count"
      style={styles.text}
      > 
      You have been here {count} times this year! 
      </Text>,
      <Text 
      key="expiry"
      style={styles.text}
      > 
      Your membership expires on {user.expiry_date} 
      </Text>
    ]}
  </View>
)

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isCheckedin: state.auth.isCheckedin,
    count: state.auth.count,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(VisitCounter)
