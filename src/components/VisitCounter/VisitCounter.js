import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'

const VisitCounter = ({isCheckedin, count, user}) => (
  <View style={styles.container}>
    {isCheckedin && [
      <Text key="count"> You have been here {count} times this year! </Text>,
      <Text key="expiry"> Your membership expires on {user.expiry_date} </Text>
    ]}
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  }
})

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isCheckedin: state.auth.isCheckedin,
    count: state.auth.count,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(VisitCounter)
