import React, {Component} from 'react'
import { Stylesheet, View } from 'react-native'

export default class VisitCounter extends Component {
    render () {
        return (
          <View style={style.container}>
          <Text>You have been here 24 times this year!</ Text>
          <Text>Your membership expires on 31/12/2019</ Text>
          </ View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
})