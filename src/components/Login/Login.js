import React, {Component} from 'react'
import {View, Button, StyleSheet} from 'react-native'

import {connect} from 'react-redux'
import t from 'tcomb-form-native'

import {userAppLogin} from '../../store/actions/login'

import styles from './styles'

const Form = t.form.Form

const User = t.struct({
  username: t.String,
  password: t.String
})

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin () {
    const {username, password} = this.refs.form.getValue()
    if (username && password) {
      this.props.login({username, password})
        .then(() => this.props.navigation.navigate('Profile'))
    }
  }
  render () {
    return (
      <View>
        <Form
          style={styles.container}
          type={User}
          ref="form"
        />
        <Button
          color="#191919"
          backgroundColor="#191919"
          title="Log in"
          onPress={this.handleLogin}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: loginData => {
      return dispatch(userAppLogin(loginData))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
