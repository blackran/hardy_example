import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Spacings, Colors as Col, Icons} from '../../atoms';

function Button(props) {
  const {
    children,
    stylePrincipal,
    styleText,
    onPress,
    iconLeft,
    isDark,
    disable,
  } = props;
  const Colors = Col(isDark);
  return (
    <TouchableOpacity
      onPress={() => {
        if (!disable) {
          onPress();
        }
      }}
      className="my-button"
    >
      <View style={{...styles(props, Colors).principale, ...stylePrincipal}}>
        {iconLeft && (
          <Icons
            name={iconLeft}
            style={styles(props, Colors).iconLeft}
            contained={true}
            color={
              props.theme === 'outlined' || !props.theme
                ? Colors.Black + 'aa'
                : Colors.White
            }
            isDark={isDark}
            size="base"
          />
        )}
        {children && (
          <Text style={{...styles(props, Colors).text, ...styleText}}>
            {children}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = ({theme, iconLeft, iconRight, children, disable}, Colors) =>
  StyleSheet.create({
    principale: {
      backgroundColor: disable
        ? Colors.Disabled
        : theme === 'contained' || !theme
        ? Colors.PrimaryDark
        : 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: Spacings.borderRadius,
      padding: Spacings.tiny,
      fontSize: Spacings.small,
      height: Spacings.xlarge,
      paddingLeft: children ? Spacings.tiny : 0,
      paddingRight: children ? Spacings.tiny : 0,
      marginLeft: Spacings.tiny / 2,
      marginRight: Spacings.tiny / 2,
      marginTop: Spacings.tiny,
      marginBottom: Spacings.tiny,
      borderWidth: theme === 'outlined' ? 2 : 0,
      borderColor: Colors.PrimaryDark,
      minWidth: Spacings.xlarge,
    },
    text: {
      color: theme === 'outlined' ? Colors.Black : Colors.White,
      fontSize: Spacings.small,
    },
    iconLeft: {
      zIndex: 2,
    },
  });

export default Button;
