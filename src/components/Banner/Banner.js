import React, {Component} from 'react'
import { Image } from 'react-native'

import styles from './styles'

export default class Banner extends Component {
  render () {
    return (
      <Image
        style={styles.banner}
        source={require('./banner2.jpg')} >
      </Image>
    )
  }
}
