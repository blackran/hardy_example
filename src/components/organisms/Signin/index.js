import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button, TextInput, Logo, Spacings, Colors as defColors } from '../../';

function Signin(props) {
  const Colors = defColors(false);
  const [state, setState] = React.useState({
    nom: '',
    password: '',
    conf_password: '',
    phone: '',
  });

  const onChangeInput = ({ name, value }) => {
    setState(Object.assign({}, state, { [name]: value }));
  };

  // React.useEffect(() => {
  //   setState({
  //     pseudo: 'nante',
  //     password: 'pass'
  //   })
  // }, [])

  return (
    <View style={styles(props).principal}>
      <View style={{ padding: Spacings.base }}>
        <Logo size={100} disableAnime={true} />
        <TextInput
          {...props}
          testID="nom"
          iconLeft={'user'}
          value={state.nom}
          onChangeInput={onChangeInput}
          name="nom"
          placeholder="nom"
          notfull={true}
        />
        <TextInput
          {...props}
          testID="pseudo"
          iconLeft={'phone'}
          value={state.phone}
          onChangeInput={onChangeInput}
          name="phone"
          placeholder="phone"
          notfull={true}
        />
        <TextInput
          {...props}
          testID="password"
          iconLeft={'keys'}
          value={state.password}
          onChangeInput={onChangeInput}
          name="password"
          type="password"
          placeholder="password"
        />
        <TextInput
          {...props}
          iconLeft={'keys'}
          testID="conf_password"
          value={state.conf_password}
          onChangeInput={onChangeInput}
          type="password"
          name="conf_password"
          placeholder="confirmation"
        />
        <Button
          {...props}
          onPress={() => {
            console.log('authentifier');
          }}
          stylePrincipal={{ marginTop: Spacings.base }}>
          Creer compte
        </Button>
        <TouchableOpacity
          onPress={() => {
            props.setIsLogin(!props.isLogin);
          }}
          style={styles(props).buttonBottom}>
          <Text style={{ textAlign: 'center', color: Colors.Black }}>
            S'authentifier ?
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

export default Signin;
