import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button, TextInput, Logo, Spacings, Colors as defColors } from '../../';

function Login(props) {
  const Colors = defColors(false);
  const [state, setState] = React.useState({
    pseudo: 'blackran',
    password: 'iloveyou',
  });

  const onChangeInput = ({ name, value }) => {
    setState(Object.assign({}, state, { [name]: value }));
  };

  const onSubmit = () => {
    props.onSubmitLogin(state);
  };

  return (
    <View style={styles(props).principal}>
      <View style={{ padding: Spacings.base }}>
        <Logo size={100} disableAnime={true} />
        <TextInput
          {...props}
          iconLeft={'user'}
          testID="pseudo"
          value={state.pseudo}
          onChangeInput={onChangeInput}
          name="pseudo"
          placeholder="pseudo"
          notfull={true}
        />
        <TextInput
          {...props}
          iconLeft={'keys'}
          testID="password"
          value={state.password}
          onChangeInput={onChangeInput}
          name="password"
          type="password"
          placeholder="password"
        />
        <TouchableOpacity
          onPress={() => {
            props.setIsLogin(!props.isLogin);
          }}
          style={{
            ...styles(props).buttonBottom,
            justifyContent: 'flex-start',
          }}>
          <Text style={{ textAlign: 'left', color: Colors.Black + '99' }}>
            Mot de passe oublier ?
          </Text>
        </TouchableOpacity>
        <Button {...props} onPress={onSubmit}>
          S'authentifier
        </Button>
        <TouchableOpacity
          onPress={() => {
            props.setIsLogin(!props.isLogin);
          }}
          style={styles(props).buttonBottom}>
          <Text style={{ textAlign: 'center', color: Colors.Black }}>
            Creer une compte ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = props =>
  StyleSheet.create({
    principal: {
      backgroundColor: 'transparent',
      justifyContent: 'center',
      flex: 1,
    },
    buttonBottom: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: Spacings.borderRadius,
      padding: Spacings.tiny,
      fontSize: Spacings.small,
      height: Spacings.xlarge,
      paddingLeft: Spacings.tiny,
      paddingRight: Spacings.tiny,
      marginLeft: Spacings.tiny / 2,
      marginRight: Spacings.tiny / 2,
      marginTop: Spacings.tiny,
      marginBottom: Spacings.tiny,
      minWidth: Spacings.xlarge,
    },
  });

export default Login;
