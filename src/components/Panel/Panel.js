import React, { Component, Text, TouchableHighlight, Image } from 'react-native' // TODO bring in animated?
import { Content } from 'native-base'

import styles from './styles'

class AccountPanel extends Component {
  contructor (props) {
    super(props)

    this.icons = {
      'up': require('./up.png'),
      'down': require('./down.png')
    }
    this.setState = {
      title: props.title,
      expanded: true
    }
  }
  toggle () {

  }

  render () {
    let icon = this.icons['down']
    if (this.state.expanded) {
      icon = this.icons['up']
    }
    return (
      <Content style={styles.container}>
        <Content style={styles.titleContainer}>
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}>
            <Image
              style={styles.buttonImage}
              source={icon}>
            </Image>
          </TouchableHighlight>
        </Content>
        <Content style={styles.body}>
          {this.props.children}
        </Content>
      </Content>
    )
  }
}

export default AccountPanel
