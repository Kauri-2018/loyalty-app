import React from 'react'

import {ScrollView} from 'react-native'

import {connect} from 'react-redux'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Greeting from '../components/Greeting'
import ProfileImg from '../components/ProfileImg'
import CheckIn from '../components/CheckIn'
import VisitCounter from '../components/VisitCounter'
import ProfileNav from '../components/ProfileNav'

class ProfileScreen extends React.Component {
  render () {
    const isCheckedin = this.props.isCheckedin || false
    return (
      <ScrollView>
        <Logo />
        <Banner />
        <Greeting />
        <ProfileImg />
        {!isCheckedin && <CheckIn />}
        {isCheckedin && <VisitCounter />}
        <ProfileNav navigation={this.props.navigation}/>
        <Footer />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    isCheckedin: state.auth.isCheckedin
  }
}

export default connect(mapStateToProps)(ProfileScreen)
