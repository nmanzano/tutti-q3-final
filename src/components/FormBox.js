import React, { Component } from 'react';
import { View } from 'react-native';
import { FacebookButton } from './common/FacebookButton';
import { CreateAccountBtn } from './common/CreateAccountBtn';


class FormBox extends Component {

  render() {
    return (
      <View>

        <View style={styles.facebkBtn}>
          <FacebookButton />
        </View>
        <View style={styles.formBoxStyle}>
          <CreateAccountBtn />
        </View>
    </View>
    );
  }
}
const styles = {
  formBoxStyle: {
    backgroundColor: '#fcf9f9',
    width: 296,
    height: 316,
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 17,
    shadowOpacity: 1
  },
  facebkBtn: {
    top: 20,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  createAccountBtn: {
    flex: 1,
    top: 120,
    justifyContent: 'center',
    alignItems: 'center'
  }
};


export default FormBox;
