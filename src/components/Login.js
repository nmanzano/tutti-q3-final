import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from './common';

class Login extends Component {
  render() {
    return (
      <View style={styles.viewPosition}>
        <Button />
      </View>
    );
  }
}

const styles = {
  viewPosition: {
    top: 430,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Login;
