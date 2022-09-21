import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Login,
  Signin,
  Colors as defColors,
} from '../../components';

function Authentification(props) {
  const Colors = defColors(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const onSubmitLogin = state => {
    const { pseudo, password } = state;
    if (pseudo === 'blackran' && password === 'iloveyou') {
      props.navigation.push('Home');
    }
  };

  const onSubmitSignin = state => {
    console.log(state);
  };

  return (
    <View style={styles(props, Colors).principal}>
      {isLogin ? (
        <Login
          {...{
            isLogin,
            setIsLogin,
            onSubmitLogin,
          }}
        />
      ) : (
        <Signin
          {...{
            isLogin,
            setIsLogin,
            onSubmitSignin,
          }}
        />
      )}
    </View>
  );
}

const styles = (props, Colors) =>
  StyleSheet.create({
    principal: {
      backgroundColor: Colors.PrimaryLight,
      // justifyContent: 'center',
      flex: 1,
      paddingTop: 50,
    },
  });

export default Authentification;
