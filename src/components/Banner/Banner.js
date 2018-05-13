import React, {Component} from 'react'
import { View, Image } from 'react-native'

import styles from './styles'
import Logo from '../Logo'

export default class Banner extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Logo />
        <Image
          style={styles.banner}
          source={require('./banner2.jpg')} >
        </Image>
      </View>
    )
  }
}
