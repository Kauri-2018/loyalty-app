import React from 'react'

import { ScrollView } from 'react-native'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Greeting from '../components/Greeting'
import ProfileImg from '../components/ProfileImg'
import CheckIn from '../components/CheckIn'
import VisitCounter from '../components/VisitCounter'
import ProfileNav from '../components/ProfileNav'

export default class ProfileScreen extends React.Component {
  render () {
    return (
      <ScrollView>
        <Logo />
        <Banner />
        <Greeting />
        <ProfileImg />
        <CheckIn />
        <VisitCounter />
        <ProfileNav />
        <Footer />
      </ ScrollView>
    )
  }
}
