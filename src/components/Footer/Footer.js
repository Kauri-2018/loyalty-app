import React, {Component} from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Banner extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          This app is powered by Loyalty.
        </Text>
      </View>
    )
  }
}
