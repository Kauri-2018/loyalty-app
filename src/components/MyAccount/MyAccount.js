import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'

class MyAccount extends Component {
  render () {
    const {profile, isAccount} = this.props
    return (
      <View styles={styles.wrapper}>
        {isAccount && <Text>{profile.name}</Text>}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.auth.profile || {},
    isAccount: state.auth.isAccount || false
  }
}

export default connect(mapStateToProps)(MyAccount)
