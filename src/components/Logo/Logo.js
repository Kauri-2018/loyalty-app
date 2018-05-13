import React, {Component} from 'react'
import { View, Image } from 'react-native'

import styles from './styles'

export default class Logo extends Component {
  render () {
    return (
      <View>
        <Image
          style={styles.logo}
          source={require('./LogoLoyalty1.jpg')} >
        </Image>
      </View>
    )
  }
}
