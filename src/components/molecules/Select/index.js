import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import {Spacings, Colors as Col, Icons} from '../../';
import RNPickerSelect from 'react-native-picker-select';

function Select(props) {
  const {onChangeInput, name, value, datas, placeholder} = props;
  const Colors = Col(false);
  return (
    <View
      style={[styles(props, Colors).select, styles(props, Colors).principal]}
    >
      <RNPickerSelect
        value={value}
        name={name}
        placeholder={placeholder ? {label: placeholder, value: ''} : {}}
        useNativeAndroidPickerStyle={false}
        onValueChange={onChangeInput}
        style={{
          inputAndroidContainer: {
            ...styles(props, Colors).select,
          },
          placeholder: {color: Colors.Black},
          iconContainer: {marginRight: 10},
        }}
        items={datas || []}
        Icon={() => {
          return (
            <Icons
              name={'chevronBottom'}
              style={styles(props, Colors).iconLeft}
              contained={true}
              color={Colors.Black + 'aa'}
              size="base"
            />
          );
        }}
      />
    </View>
  );
}

const styles = (props, Colors) =>
  StyleSheet.create({
    principal: {
      marginTop: Spacings.tiny,
      overflow: 'hidden',
      alignItems: 'center',
      ...props.style,
    },
    select: {
      borderRadius: Spacings.borderRadius,
      height: Spacings.xlarge,
      width: Spacings.tiny * 20,
      backgroundColor: Colors.White,
      justifyContent: 'center',
      color: Colors.Black,
      ...props.styleSelect,
    },
  });

export default Select;
