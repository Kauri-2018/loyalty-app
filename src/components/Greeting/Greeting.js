import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'

class Greeting extends Component {
  render () {
    return (
      <View style={styles.container}>
        {this.props.isAuth && <Text> Welcome, {this.props.user.name} </Text>}
      </View>
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
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user
  }
}
export default connect(mapStateToProps)(Greeting)
