import React, { Component, StyleSheet, Text, TouchableHighlight, Animated } from 'react-native'
import { Content } from 'native-base'

class AccountPanel extends Component {
    contructor(props) {
        super(props)

        this.icons = {
            'up': require('./up.png'),
            'down': require('./down.png')
        }
        this.state = {
            title: props.title,
            expanded: true
        }
    }
    toggle() {

    }

    render() {
        let icon = this.icons['down']
        if(this.state.expanded){
            icon = this.icons['up']
        }
        return (
          <Content>
            <Content>
              <Text>{this.state.title}</Text>
              <TouchableHighlight
                onPress={this.toggle.bind(this)}>
                <Image
                source={icon}>
                </Image>
              </TouchableHighlight>
            </Content>
            <Content>
              {this.props.children}
            </Content>
          </Content>
        )
    }
}

export default AccountPanel
