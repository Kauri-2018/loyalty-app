import React, {Component} from 'react'
import { Image, ImageBackground } from 'react-native'

import styles from './styles'

export default class ProfileImg extends Component {
  render () {
    return (
        <ImageBackground style={styles.container}>
      <Image
        style={styles.img}
        source={require('./id-card.png')}>
      </Image>
      </ImageBackground>
    )
  }
}
