import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class ProfileImg extends Component {
    render () {
        return (
          <View style={styles.Container}>
          <Image
            style={{width: 250, height: 250, borderRadius: 125}}
            source={{uri: 'https://1funny.com/wp-content/uploads/2011/11/fat-face-cat.jpg'}} >
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
    borderRadius: 125
  }
})