import React from 'react'

import { Content } from 'native-base'

import {connect} from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Greeting from '../components/Greeting'
import ProfileImg from '../components/ProfileImg'
import CheckIn from '../components/CheckIn'
import VisitCounter from '../components/VisitCounter'
import ProfileNav from '../components/ProfileNav'

class ProfileScreen extends React.Component {
  render () {
    const isCheckedin = this.props.isCheckedin || false
    return (
      <Content>
        <Header />
        <Greeting />
        <ProfileImg />
        {!isCheckedin && <CheckIn />}
        {isCheckedin && <VisitCounter />}
        <ProfileNav navigation={this.props.navigation}/>
        <Footer />
      </ Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    isCheckedin: state.auth.isCheckedin
  }
}

export default connect(mapStateToProps)(ProfileScreen)
