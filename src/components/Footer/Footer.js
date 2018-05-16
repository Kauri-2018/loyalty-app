import React, {Component} from 'react'
import { View, Text, ImageBackground } from 'react-native'

import styles from './styles'

export default class Banner extends Component {
  render () {
    return (
      <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require('../../images/maxresdefault.jpg')} >
        <Text style={styles.text}>
          This app is powered by Loyalty.
        </Text>
        </ImageBackground>
      </View>
    )
  }
}
