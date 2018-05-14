import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

class History extends Component {
  render () {
    return (
      <View className="history-wrapper">
        <h2>This will be a history component</h2>
      </View>
    )
  }
}

export default connect()(History)
