import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import moment from 'moment'

import styles from './styles'

class History extends Component {
  render () {
    const {visits, isVisits} = this.props
    return (
      <View styles={styles.wrapper}>
        {isVisits &&
          visits.map(
            visit => <Text key={visit.timestamp}>{moment(visit.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</Text>
          )}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    visits: state.auth.visits || [],
    isVisits: state.auth.isVisits || false
  }
}

export default connect(mapStateToProps)(History)
