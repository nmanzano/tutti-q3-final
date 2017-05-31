import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    fontFamily: 'Open Sans',
    width: 180,
    fontSize: 23,
    fontWeight: '300',
    textAlign: 'left',
    height: 20,
  },
  textLabel: {
    alignItems: 'flex-start'  
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 160,
    padding: 10,
    width: 182,
    left: 93,
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'black',
  }
};
export { Input };
