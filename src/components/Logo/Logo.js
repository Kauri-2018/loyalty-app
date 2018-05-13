import React, {Component} from 'react'
import { View, Image } from 'react-native'

export default class Logo extends Component {
  render () {
    return (
      <View >
        <Image
          style={{width: 140, height: 100}}
          source={require('./LogoLoyalty1.png')} >
        </Image>
      </View>
    )
  }
}
