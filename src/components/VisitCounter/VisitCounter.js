import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'

class VisitCounter extends Component {
  render () {
    const {isCheckedin, count, user} = this.props
    return (
      {isCheckedin &&
        <View style={styles.container}>
          <Text> You have been here {count} times this year! </Text>
          <Text> Your membership expires on {user.expiry_date} </Text>
        </View>
      }
    )
  }
}

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
