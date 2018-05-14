import React, {Component} from 'react'
import {View, Button, StyleSheet} from 'react-native'

import {connect} from 'react-redux'
import t from 'tcomb-form-native'

import {userAppLogin} from '../../store/actions/login'

const Form = t.form.Form

const User = t.struct({
  username: t.String,
  password: t.String
})

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
}

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
          option={options}
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  }
})

const mapDispatchToProps = dispatch => {
  return {
    login: loginData => {
      return dispatch(userAppLogin(loginData))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
