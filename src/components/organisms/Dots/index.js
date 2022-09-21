import React from 'react';
import { View, StyleSheet } from 'react-native';
import { OneDot } from '../../molecules';

function Dots(props) {
  const { length, active } = props;
  let datas = [];
  for (let i = 0; i < length; i++) {
    datas = [...datas, <OneDot {...props} key={i} active={i === active} />];
  }
  return <View style={{ ...styles(props).principale }}>{datas}</View>;
}

const styles = ({ active }) =>
  StyleSheet.create({
    principale: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
  });

export default Dots;
