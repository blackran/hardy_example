import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {
  Button,
  TextInput,
  Images,
  Spacings,
  Colors as defColors,
} from '../../';

const { width: widthW, height: heightW } = Dimensions.get('window');

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
    // props.onSubmitLogin(state);
    props.navigation.push('Home', {
      screen: 'StackNavigatorDeux',
      params: {
        screen: 'Contacts',
      },
    });
  };

  const onPressButtonLeft = () => {
    props.setActiveMobileMoney('');
  };

  return (
    <View style={styles(props).principal}>
      <Image
        source={props.image}
        style={[
          StyleSheet.absoluteFillObject,
          { width: widthW, height: heightW },
        ]}
        blurRadius={10}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          justifyContents: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Button
          iconLeft="chevronLeft"
          stylePrincipal={{
            backgroundColor: Colors.White,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 3,
          }}
          onPress={onPressButtonLeft}
          {...props}
        />
      </View>
      <View style={{ padding: Spacings.base }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: Spacings.small,
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: Spacings.borderRadius,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
              elevation: 1,
            }}>
            <Images
              src={props.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: Spacings.borderRadius,
                overflow: 'hidden',
              }}
            />
          </View>
        </View>
        <TextInput
          {...props}
          iconLeft={'phone'}
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
        <Button {...props} onPress={onSubmit}>
          Payer 600Ar
        </Button>
        <TouchableOpacity
          onPress={() => props.setActiveMobileMoney('')}
          style={styles(props).buttonBottom}>
          <Text style={{ textAlign: 'center', color: Colors.Black }}>
            Choisir une autre Mode?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = () =>
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
