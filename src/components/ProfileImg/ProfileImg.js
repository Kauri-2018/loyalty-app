import React, {Component} from 'react'
import {View, Image} from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'

class ProfileImg extends Component {
  render () {
    return (
      <View style={styles.container}>
        {this.props.isAuth &&
          <Image
            style={{width: 250, height: 250, borderRadius: 125}}
            source={{uri: `${this.props.user.profilePhoto}`}} />
        }
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user
  }
}
export default connect(mapStateToProps)(ProfileImg)
