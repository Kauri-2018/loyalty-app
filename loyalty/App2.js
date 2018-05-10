import React from 'react'

import { View } from 'react-native'

import Banner from './src/components/Banner'
import Footer from './src/components/Footer'
import Logo from './src/components/Logo'
import Greeting from './src/components/Greeting'
import ProfileImg from './src/components/ProfileImg'
import CheckIn from './src/components/CheckIn'
import VisitCounter from './src/components/VisitCounter'
import ProfileNav from './src/components/ProfileNav'


export default class App2 extends React.Component {
  render() {
    return (
      <View>
        <Logo />
        <Banner />
        <Greeting />
        <ProfileImg />
        <CheckIn />
        <VisitCounter />
        <ProfileNav />
        <Footer />
      </View>
    )
  }
}