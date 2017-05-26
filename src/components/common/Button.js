import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          Test
        </Text>
      </TouchableOpacity>
    );
  };

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    width: 79,
    height: 17.7,
    borderRadius: 2.3,
    backgroundColor: 'rgb(0, 138, 216)',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1.3,
    shadowOpacity: 1
  }
};

export { Button };
