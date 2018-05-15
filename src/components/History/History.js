import React, {Component} from 'react'
// import {View, Text} from 'react-native'
import {Content, Card, CardItem, Text, Body} from 'native-base'

import {connect} from 'react-redux'

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
                  <Text>{visit.timestamp}</Text>
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
