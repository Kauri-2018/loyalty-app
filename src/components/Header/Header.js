import React, {Component} from 'react'
import { View } from 'react-native'

import styles from './styles'

import Banner from '../Banner'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Banner style={styles.banner}/>
      </View>
    )
  }
}
