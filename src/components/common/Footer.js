import React from 'react';
import { View, Text } from 'react-native';

const Footer = () => (
    <View style={styles.footerStyle}>
      <Text>
        Test
      </Text>
    </View>
  );

const styles = {
  footerStyle: {
    top: 490,
    height: 71,
    backgroundColor: '#fffcfc',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { Footer };
