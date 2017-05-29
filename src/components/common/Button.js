import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          Log In!
        </Text>
      </TouchableOpacity>
    );
  };

const styles = {
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: 'rgb(255,255,255)',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    width: 179,
    borderRadius: 6,
    backgroundColor: 'rgb(0, 138, 216)',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 1
  }
};

export { Button };
