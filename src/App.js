import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Login from './components/Login';
import Signup from './components/Signup';
import { Button } from './components/common/Button';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAbDNDySXhkB7X73NoT3s5Lz_go8Is2mCc',
      authDomain: 'tutti-724e4.firebaseapp.com',
      databaseURL: 'https://tutti-724e4.firebaseio.com',
      projectId: 'tutti-724e4',
      storageBucket: 'tutti-724e4.appspot.com',
      messagingSenderId: '77125320804'
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );

      case false:
        return <Login />;

      default:
    }
  }
  render() {
    return (
      <View>
        {/* <Login /> */}
        <Signup />
      </View>
    );
  }
}

export default App;
