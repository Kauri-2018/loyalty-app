import React, {Component} from 'react'
import {Button} from 'react-native'
import {Content} from 'native-base'
import {connect} from 'react-redux'

import {logout} from '../../store/actions/logout'

// import styles from './styles'

class ProfileNav extends Component {
  constructor (props) {
    super(props)
    this.userLogout = this.userLogout.bind(this)
    // this.loadAccount = this.loadAccount.bind(this)
  }

  userLogout () {
    this.props.dispatch(logout())
    this.props.navigation.navigate('Home')
  }

  // loadAccount () {
  //   this.props.navigation.navigate('Account')
  // }

  render () {
    return (
      <Content>
        <Button
          color="#084da8"
          title="My Account"
          onPress={this.props.isAuth
            ? this.props.navigation.navigate('Account')
            : this.userLogout}
        />
        <Button
          color="#084da8"
          title="Visit History"
          onPress={this.loadHistory}
        />
        <Button
          color="#084da8"
          title="Logout"
          onPress={this.userLogout}
        />
      </Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(ProfileNav)
