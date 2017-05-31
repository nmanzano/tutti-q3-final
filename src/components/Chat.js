import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Footer, Button } from './common/Index';

class Chat extends Component {
  render() {
    return (
      <View>
        <View>
          <Header />
        </View>

        <View>
          <Button> Log Out </Button>
        </View>

        <View>
          <Footer />
        </View>
      </View>
    );
  }
}


export default Chat;
