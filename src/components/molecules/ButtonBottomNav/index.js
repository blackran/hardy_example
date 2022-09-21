import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../atoms';

function ButtonBottomNav(props) {
  const { icon, active, onPress, style } = props;
  return (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.9}>
      <View style={{ ...styles(props).principale }}>
        <Icons name={icon} contained={active || false} isDark={props.isDark} />
      </View>
    </TouchableOpacity>
  );
}

const styles = ({ active }) =>
  StyleSheet.create({
    principale: {
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
  });

export default ButtonBottomNav;
