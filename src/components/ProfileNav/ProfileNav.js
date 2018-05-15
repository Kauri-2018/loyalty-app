import React, {Component} from 'react'
import {View, Button} from 'react-native'
import {connect} from 'react-redux'

import History from '../History/index'
import MyAccount from '../MyAccount/index'

import {logout} from '../../store/actions/logout'
import {getVisitsHistory} from '../../store/actions/visits'
import {getAccountInfo} from '../../store/actions/profile'

// import styles from './styles'

class ProfileNav extends Component {
  constructor (props) {
    super(props)
    this.userLogout = this.userLogout.bind(this)
  }

  userLogout () {
    this.props.dispatch(logout())
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <View>
        <Button
          color="#084da8"
          title="My Account"
          onPress={this.props.getAccountInfo}
        />
        <MyAccount />
        <Button
          color="#084da8"
          title="Visit History"
          onPress={this.props.getVisitsHistory}
        />
        <History />
        <Button
          color="#084da8"
          title="Logout"
          onPress={this.userLogout}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getVisitsHistory: () => dispatch(getVisitsHistory()),
    getAccountInfo: () => dispatch(getAccountInfo())
  }
}

export default connect(null, mapDispatchToProps)(ProfileNav)
// export default ProfileNav
