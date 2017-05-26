// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    // View tag's purpose is to position elements on the screen
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    marginBottom: 5,
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#0f0f0f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app
export { Header };
