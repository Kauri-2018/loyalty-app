import React, {Component} from 'react'
import {View, Button} from 'react-native'
import {connect} from 'react-redux'

import {logout} from '../../store/actions/logout'

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
          title="My Account"
          onPress={this.loadAccount}
        />
        <Button
          title="Visit History"
          onPress={this.loadHistory}
        />
        <Button
          title="Logout"
          onPress={this.userLogout}
        />
      </View>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     handleLogout: () => dispatch(logout())
//   }
// }

export default connect()(ProfileNav)
// export default ProfileNav
