import React, {Component} from 'react'
import {View, Button, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import t from 'tcomb-form-native'

import {userAppCheckin} from '../../store/actions/checkin'

const Form = t.form.Form

const CheckInForm = t.struct({
  code: t.String
})

class CheckIn extends Component {
  constructor (props) {
    super(props)
    this.handleCheckin = this.handleCheckin.bind(this)
  }

  handleCheckin () {
    const {code} = this.refs.form.getValue()
    this.props.userCheckin(code)
  }

  render () {
    return (
      <View style={styles.container}>
        <Form type={CheckInForm} ref="form" />
        <Button
          title="Check in"
          onPress={this.handleCheckin}
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
    userCheckin: passcode => dispatch(userAppCheckin(passcode))
  }
}

export default connect(null, mapDispatchToProps)(CheckIn)
