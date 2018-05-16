import React, {Component} from 'react'
import {Content, Card, CardItem, Text, Body} from 'native-base'
import {connect} from 'react-redux'
import moment from 'moment'
import styles from './styles'

class History extends Component {
  render () {
    const {visits, isVisits} = this.props
    return (
      <Content padder>
        <Card>
          {isVisits &&
            visits.map(
              visit => <CardItem key={visit.timestamp} bordered>
                <Body>
                  <Text style={styles.textContent}>{moment(visit.timestamp).local().format('MMMM Do YYYY, h:mm:ss a')}</Text>
                </Body>
              </CardItem>
            )}
        </Card>
      </Content>
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
