import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Spacings, Colors as Col, Icons } from '../../atoms';

function ButtonMode(props) {
  const { isDark, onPressToggle, stylePrincipal } = props;
  const Colors = Col(isDark);
  return (
    <TouchableOpacity onPress={onPressToggle} className="my-button">
      <View style={{ ...styles(props, Colors).principale, ...stylePrincipal }}>
        <Icons
          name={isDark ? 'contrast' : 'sun'}
          style={styles(props, Colors).iconLeft}
          contained={true}
          color={
            props.theme === 'outlined' || !props.theme
              ? Colors.Black + 'aa'
              : Colors.White
          }
          size="base"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = ({ theme }, Colors) =>
  StyleSheet.create({
    principale: {
      backgroundColor:
        theme === 'contained' || !theme ? Colors.PrimaryDark : 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: Spacings.borderRadius,
      padding: Spacings.tiny,
      fontSize: Spacings.small,
      height: Spacings.xlarge,
      marginLeft: Spacings.tiny / 2,
      marginRight: Spacings.tiny / 2,
      marginTop: Spacings.tiny,
      marginBottom: Spacings.tiny,
      borderWidth: theme === 'outlined' ? 2 : 0,
      borderColor: Colors.PrimaryDark,
      minWidth: Spacings.xlarge,
    },
    icon: {
      zIndex: 2,
    },
  });

export default ButtonMode;
