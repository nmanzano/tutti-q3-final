import React, {Component} from 'react';
import { View, Input } from 'react-native';
import { FacebookButton } from './common/FacebookButton';


class FormBox extends Component {
  render() {
    return (
      <View>

        <View style={styles.facebkBtn}>
          <FacebookButton />
        </View>
        <View style={styles.formBoxStyle}>
        </View>
    </View>
    );
  }
}
const styles = {
  formBoxStyle: {
    backgroundColor: '#fcf9f9',
    width: 290,
    height: 295.3,
    borderRadius: 3,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 0.7
    },
    shadowRadius: 5.7,
    shadowOpacity: 1
  },
  facebkBtn: {
    top: 20,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};


export default FormBox;
