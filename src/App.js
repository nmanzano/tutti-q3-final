import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import { Spinner } from './components/common/Index';

class App extends Component {
  state = { loggedIn: null };

  // componentWillMount is a lifecycle method. A lifecycle method is
  // a method that is automatically invoked inside of our component.
  // all we have to do is define it and if we define it, it will be
  // automatically called.
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAbDNDySXhkB7X73NoT3s5Lz_go8Is2mCc',
      authDomain: 'tutti-724e4.firebaseapp.com',
      databaseURL: 'https://tutti-724e4.firebaseio.com',
      projectId: 'tutti-724e4',
      storageBucket: 'tutti-724e4.appspot.com',
      messagingSenderId: '77125320804'
    });

    firebase.auth().onAuthStateChanged((user) => {
      // checks to see if a user is logged in or not
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Chat />
        );

      case false:
        return <Login />;

      default:
        return <Spinner size='large' />;
    }
  }
  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
