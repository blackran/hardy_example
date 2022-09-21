import React from 'react';
import {
  View,
  TextInput as TextInputNative,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors as Col, Spacings, Icons } from '../../atoms';

function TextInput(props) {
  const {
    onChangeInput,
    name,
    value,
    placeholder,
    onPressRight,
    isDark,
    onSubmit,
    notfull,
  } = props;

  const Colors = Col(isDark);

  const OnChange = e => {
    const stock = {
      value: e,
      name,
    };
    if (onChangeInput) {
      onChangeInput(stock);
    }
  };

  return (
    <View style={{ ...styles(props, Colors).principal }}>
      <TextInputNative
        placeholder={placeholder}
        value={value}
        onChangeText={OnChange}
        style={{ ...styles(props, Colors).input }}
        onSubmitEditing={onSubmit}
        placeholderTextColor={Colors.Black + '66'}
        multiline={true}
        numberOfLines={2}
      />
      <TouchableOpacity
        onPress={onPressRight}
        style={{ ...styles(props, Colors).iconRight }}>
        <Icons
          name={'send'}
          contained={!notfull}
          color={Colors.Black + 'bb'}
          size="small"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = (props, Colors) =>
  StyleSheet.create({
    principal: {
      marginTop: Spacings.tiny,
      marginBottom: Spacings.tiny,
      position: 'relative',
      ...props.style,
    },
    input: {
      backgroundColor: Colors.White,
      borderRadius: Spacings.borderRadius,
      padding: Spacings.tiny,
      fontSize: Spacings.small,
      paddingLeft: props.iconLeft ? Spacings.base + 12 : Spacings.tiny,
      paddingRight: props.iconRight ? Spacings.base + 12 : Spacings.tiny,
      color: Colors.Black,
    },
    iconRight: {
      position: 'absolute',
      right: Spacings.tiny,
      zIndex: 1,
      borderWidth: 1,
      top: Spacings.tiny,
      borderRadius: Spacings.borderRadius,
      borderColor: Colors.Black + 'aa',
    },
  });

export default TextInput;
