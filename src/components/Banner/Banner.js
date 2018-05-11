import React, {Component} from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class Banner extends Component {
  render () {
    return (
      <View style={styles.Container}>
        <Image
          style={{width: 350, height: 150}}
          source={{uri: 'http://via.placeholder.com/350x150'}} >
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
