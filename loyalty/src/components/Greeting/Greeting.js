import React, {Component} from 'react'
import { Stylesheet, View } from 'react-native'

export default class Greeting extends Component {
    render () {
      return (
				<View style={style.Container}>
				<Text> Welcome, Tori! </ Text>
				</ View>
			)
    }
}