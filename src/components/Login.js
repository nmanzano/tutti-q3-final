import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Button, Input, Spinner } from './common/Index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  // state is what we use to deal with feedback from the user or react to user
  // events
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    // reference email and password from this.state
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      // if success log in
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        // if signin fails. Create a user account
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
  }

  onLoginSuccess() {
    // update the state object upon login success
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='large' />;
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)} />
      );
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

        <View>
          {/* by default text input does not have a set hight and width.
            They render with a height and width of zero. To get it visible,
            add a style prop and give it a height and width */}
          <Input
            value={this.state.email}
            label='email'
            placeholder='user@gmail.com'
            // prop that sets property text with function
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View>
          <Input
            secureeTextEntry
            value={this.state.password}
            label='password'
            placeholder='password'
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <View>
          <Text style={styles.authError}>
            {this.state.error}
          </Text>
        </View>
        <View style={styles.buttonPosition}>
          { this.renderButton() }
        </View>

        <View style={styles.needAccountPos}>
          <View style={styles.DontHaveAcctPos}>
            <Text style={styles.DontHaveAcctTxt}>
              Don't have an account?
            </Text>
          </View>
          <View style={styles.signUpPos}>
            <Text style={styles.signUpTxt}>
              Sign up
            </Text>
          </View>
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
    top: 50,
  },
  titleFont: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    height: 56,
    fontSize: 41,
    lineHeight: 56,
    textAlign: 'center',
  },
  gettingStarted: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 87,
  },
  gettingStartedText: {
    fontFamily: 'Open Sans',
    height: 32,
    fontSize: 23,
    lineHeight: 32,
    fontWeight: '300',
    textAlign: 'center'
  },
  buttonPosition: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 225,
  },
  needAccountPos: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 300
  },
  DontHaveAcctPos: {

  },
  DontHaveAcctTxt: {
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '300',
    color: '#373e52',
    lineHeight: 18,
  },
  signUpPos: {
    left: 10
  },
  signUpTxt: {
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '600',
    lineHeight: 18,
    color: '#f60068'
  },
  authError: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};

export default Login;
