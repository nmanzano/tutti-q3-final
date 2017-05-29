import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, TextInput } from 'react-native';
import { Button } from './common/Button';

// const { titleFont } = styles;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  state = { email: '', password: '' }

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed'
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <View>
        <View style={styles.viewPosition}>
          <Text style={styles.titleFont}>
            tutti
          </Text>
        </View>

        <View style={styles.gettingStarted}>
          <Text style={styles.gettingStartedText}>
            Let's get started
          </Text>
        </View>

        <View style={styles.usernamePosition}>
          <TextInput
            style={styles.usernameTxt}
            placeholder='username'
            onChangeText={(text) => this.setState({ text })}
          />
        </View>

        <View style={styles.passwdPosition}>
          <TextInput
            style={styles.passwdTxt}
            placeholder='password'
          />
        </View>

        <View style={styles.buttonPosition}>
          <Button />
        </View>
      </View>

    );
  }
}

const styles = {
  viewPosition: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: 46.7,
  },
  titleFont: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    height: 28.7,
    fontSize: 23.7,
    letterSpacing: -0.24,
    textAlign: 'center',
  },
  gettingStarted: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 85.7,
  },
  gettingStartedText: {
    fontFamily: 'Open Sans',
    fontSize: 23,
    fontWeight: '300',
    textAlign: 'center'
  },
  usernamePosition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 160,
    padding: 10
  },
  usernameTxt: {
    fontFamily: 'Open Sans',
    width: 182,
    fontSize: 25.7,
    fontWeight: '300',
    textAlign: 'left',
    height: 40
  },
  passwdPosition: {
    top: 180,
    padding: 10
  },
  passwdTxt: {
    fontFamily: 'Open Sans',
    fontSize: 25.7,
    fontWeight: '300',
    textAlign: 'left',
    height: 40
  },
  buttonPosition: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 220,
  }
};

export default Login;
