import React, { Component } from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase';
import { Header, Footer } from './common/Index';

class Chat extends Component {

  render() {
    return (
      <View>
        <View>
          <Header />
        </View>

        <View style={styles.logOutBtn}>
        <Button
          onPress={() => firebase.auth().signOut()}
          title="Log Out"
        />
        </View>

        <View>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = {
  logOutBtn: {
    top: 480
  }
};


export default Chat;
