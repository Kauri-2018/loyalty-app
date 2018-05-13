import React, {Component} from 'react'
import { StyleSheet, Image } from 'react-native'
import { Header } from 'native-base'

export default class Banner extends Component {
  render () {
    return (
      <Header style={styles.Container}>
        <Image
          style={{width: 350, height: 150}}
          source={{uri: 'http://via.placeholder.com/350x150'}} >
        </Image>
      </Header>
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
