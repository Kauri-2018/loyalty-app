import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

class MyAccount extends Component {
  constructor (props) {
    super(props)
    this.userLogout = this.userLogout.bind(this)
  }

  render () {
    return (
      <View>

      </View>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     handleLogout: () => dispatch(logout())
//   }
// }

export default connect()(MyAccount)
// export default ProfileNav
