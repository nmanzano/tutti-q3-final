import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { Button } from './common';

// const { fontStyle } = styles;

class Login extends Component {
  render() {
    return (
      <View>
        <View style={styles.viewPosition}>
          <Text style={{ fontFamily: 'Open Sans', fontWeight: 'bold' }}>
            tutti
          </Text>
        </View>

        {/* <View style={viewPosition}>
          <Button />
        </View> */}


      </View>

    );
  }
}

const styles = {
  viewPosition: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

export default Login;
