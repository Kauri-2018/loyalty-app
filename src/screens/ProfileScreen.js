import React from 'react'

import { Content } from 'native-base'

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
      <Content>
        <Logo />
        <Banner />
        <Greeting />
        <ProfileImg />
        <CheckIn />
        <VisitCounter />
        <ProfileNav navigation={this.props.navigation}/>
        <Footer />
      </ Content>
    )
  }
}
