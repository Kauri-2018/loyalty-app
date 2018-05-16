import React, {Component} from 'react'
import { ImageBackground, Image } from 'react-native'

import styles from './styles'

export default class Banner extends Component {
  render () {
    return (
      <ImageBackground
        style={styles.banner}
        source={require('./banner2.jpg')} >
        <Image
          style={styles.logo}
          source={require('./LogoLoyalty1.jpg')} >
        </Image>
        <Image
        style={styles.img}
        source={require('../../images/maxresdefault.jpg')} >
      </Image>
      </ImageBackground>
    )
  }
}
