import React from 'react';
import { Text } from 'react-native';
import { Spacings, Colors as ColorsF } from '../';

const Title = ({ children, style, isDark, size }) => {
  const Colors = ColorsF(isDark);
  return (
    <Text
      style={{
        fontSize: Spacings[size || 'small'] + 2,
        fontWeight: 'bold',
        color: Colors.Black,
        ...style,
      }}>
      {children}
    </Text>
  );
};

const Paragraph = ({ children, style, isDark, size }) => {
  const Colors = ColorsF(isDark);
  return (
    <Text
      style={{
        fontSize: Spacings[size || 'small'] - 2,
        color: Colors.Black + '99',
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default { Title, Paragraph };
