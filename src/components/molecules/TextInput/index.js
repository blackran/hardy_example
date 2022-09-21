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
    iconLeft,
    iconRight,
    onPressRight,
    isDark,
    type,
    onSubmit,
    notfull,
    keyboardType,
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

  const [types, setTypes] = React.useState(false);

  React.useEffect(() => {
    setTypes(type === 'password');
  }, [type]);

  const onClickEye = () => {
    setTypes(!types);
  };

  return (
    <View style={{ ...styles(props, Colors).principal }}>
      {iconLeft && (
        <Icons
          name={iconLeft}
          style={styles(props, Colors).iconLeft}
          contained={!notfull}
          color={Colors.Black + 'aa'}
          size="base"
        />
      )}
      <TextInputNative
        placeholder={placeholder}
        value={value}
        onChangeText={OnChange}
        style={{ ...styles(props, Colors).input }}
        onSubmitEditing={onSubmit}
        placeholderTextColor={Colors.Black + '66'}
        secureTextEntry={types}
        keyboardType={keyboardType}
      />
      {iconRight && (
        <TouchableOpacity
          onPress={onPressRight}
          style={{ ...styles(props, Colors).iconRight }}>
          <Icons
            name={iconRight}
            contained={!notfull}
            color={Colors.Black + 'aa'}
            size="base"
          />
        </TouchableOpacity>
      )}

      {type === 'password' && (
        <TouchableOpacity
          onPress={onClickEye}
          style={{ ...styles(props, Colors).iconRight }}>
          <Icons
            name={types ? 'eye_closed' : 'eye_opened'}
            contained={true}
            size="base"
            styles={styles(props, Colors).iconRight}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = (props, Colors) =>
  StyleSheet.create({
    principal: {
      marginLeft: Spacings.tiny / 2,
      marginRight: Spacings.tiny / 2,
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
      height: Spacings.xlarge,
      paddingLeft: props.iconLeft ? Spacings.base + 12 : Spacings.tiny,
      paddingRight: props.iconRight ? Spacings.base + 12 : Spacings.tiny,
      color: Colors.Black,
      textAlignVertical: 'top',
      ...props.stylesInput,
    },
    iconLeft: {
      position: 'absolute',
      left: 4,
      zIndex: 1,
      // borderWidth: 1,
      top: '50%',
      transform: [{ translateY: -((Spacings.base + 4) / 2) }],
    },
    iconRight: {
      position: 'absolute',
      right: 4,
      zIndex: 1,
      // borderWidth: 1,
      top: '50%',
      transform: [{ translateY: -((Spacings.base + 4) / 2) }],
    },
  });

export default TextInput;
