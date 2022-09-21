import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Logo } from '../../components';
import { useDispatch } from 'react-redux';

function Splash(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.navigation) {
      async function funcAsync() {
        let isDark = await AsyncStorage.getItem('isDarkPanera');
        dispatch({ type: 'CHANGE_THEME', datas: { isDark: isDark === '1' } });
        const isInstall = await AsyncStorage.getItem('isAlredyInstall');
        setTimeout(async () => {
          if (isInstall === '1') {
            props.navigation.replace('Authentification');
          } else {
            props.navigation.replace('Onboarding');
          }
          await AsyncStorage.setItem('isAlredyInstall', '1');
        }, 1000);
      }
      funcAsync();
    }
  }, [props, dispatch]);

  return (
    <View style={styles(props).principal}>
      <Logo size={100} />
    </View>
  );
}

const styles = () =>
  StyleSheet.create({
    principal: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
  });

export default Splash;
