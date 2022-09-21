import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Spacings, Colors as defColors } from '../../';

function Contacts(props) {
  const { style, children } = props;
  const Colors = defColors(false);
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('Home', {
          screen: 'StackNavigatorDeux',
          params: {
            screen: 'Authentification',
          },
        });
      }}
      style={{
        backgroundColor: Colors.White,
        borderRadius: Spacings.borderRadius,
        ...style,
      }}>
      {children}
    </TouchableOpacity>
  );
}

export default Contacts;
