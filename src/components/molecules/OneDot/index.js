import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Spacings, Colors as ColorsF } from '../../atoms';

function OneDot(props) {
  const Colors = ColorsF(props.isDark);

  return (
    <View
      style={{
        ...styles(props, Colors).principale,
      }}>
      <View style={{ ...styles(props, Colors).indicator }}>
        <Animated.View
          style={{
            ...styles(props, Colors).dot,
          }}
        />
      </View>
    </View>
  );
}

const styles = ({ active }, Colors) =>
  StyleSheet.create({
    principale: {
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      margin: Spacings.tiny / 2,
    },
    indicator: {
      width: Spacings.base,
      height: Spacings.base,
      borderWidth: 2,
      borderColor: active ? Colors.PrimaryDark : 'transparent',
      borderRadius: Spacings.base,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      backgroundColor: Colors.PrimaryDark,
      width: Spacings.small,
      height: Spacings.small,
      borderRadius: Spacings.small,
    },
  });

export default OneDot;
