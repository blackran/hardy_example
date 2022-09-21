import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors as ColorsF, Button, ButtonMode, Types } from '../../../components';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';

function HeaderStackDeux(props) {
  const { isDark, locate } = props;
  const dispatch = useDispatch();
  const Colors = ColorsF(isDark);

  const onPressButtonLeft = () => {
    if (props.navigation) {
      // props.navigation.push('Home', { screen: 'BottomNavigator', params: { screen: 'PrincipalTab', }, });
      props.navigation.pop();
    }
  };

  const onPressToggle = () => {
    dispatch({ type: 'CHANGE_THEME', datas: { isDark: !isDark } });

    AsyncStorage.removeItem('isDarkPanera');
    const newIsDarkPanera = isDark ? '0' : '1';
    console.log({ newIsDarkPanera });
    AsyncStorage.setItem('isDarkPanera', isDark ? '0' : '1');
  };

  return (
    <View style={styles(props, Colors).header}>
      <Button
        iconLeft="chevronLeft"
        stylePrincipal={{ backgroundColor: Colors.White }}
        onPress={onPressButtonLeft}
        {...props}
      />
      <Types.Title
        isDark={false}
        size={'small'}
        style={{ color: Colors.Black + 'aa' }}>
        {locate || 'Detail'}
      </Types.Title>
      <View />
    </View>
  );
}

const styles = (props, Colors) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 2,
      backgroundColor: props.backgroundColor || Colors.PrimaryLight,
    },
  });

export default HeaderStackDeux;
