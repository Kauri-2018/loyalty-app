import React, {Component} from 'react'
import {View, Button, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import t from 'tcomb-form-native'

import {userAppCheckin} from '../../store/actions/checkin'

import styles from './styles'

const Form = t.form.Form

const CheckInForm = t.struct({
  Passcode: t.String
})

class CheckIn extends Component {
  constructor (props) {
    super(props)
    this.handleCheckin = this.handleCheckin.bind(this)
  }

  handleCheckin () {
    const {passcode} = this.refs.form.getValue()
    this.props.userCheckin(passcode)
  }

  render () {
    return (
      <View style={styles.container}>
        <Form type={CheckInForm} ref="form" />
        <Button
          title="Check in"
          onPress={this.handleCheckin}
          color="#084da8"
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userCheckin: passcode => dispatch(userAppCheckin(passcode))
  }
}

export default connect(null, mapDispatchToProps)(CheckIn)
