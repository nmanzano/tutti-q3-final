import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common/Header';
import { Footer } from './common/Footer';

class Chat extends Component {
  render() {
    return (
      <View>
        <View>
          <Header />
        </View>

        <View>
          <Text>
            Test
          </Text>
        </View>

        <View>
          <Footer />
        </View>
      </View>
    );
  }
}


export default Chat;
