import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FacebookButton = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          Sign up with Facebook
        </Text>
      </TouchableOpacity>
    );
  };

const styles = {
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Open Sans',
    color: 'rgb(255,255,255)',
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    width: 179,
    borderRadius: 6,
    backgroundColor: '#34498F',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 1
  }
};

export { FacebookButton };
