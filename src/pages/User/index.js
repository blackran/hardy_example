import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Colors as ColorsF,
  Spacings,
  Header,
  Images,
  Types,
  Icons,
} from '../../components';

const { height } = Dimensions.get('screen');

function User(props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [yImage, setYImage] = React.useState(0);

  React.useEffect(() => {
    const alredyConnected = false;
    if (alredyConnected) {
      props.navigation.push('Home', {
        screen: 'StackNavigatorDeux',
        params: {
          screen: 'Authentification',
        },
      });
    }
  }, [props.navigation]);
  const Colors = ColorsF(props.isDark);
  const widthImage = Spacings.tiny * 15;

  return (
    <View style={styles(props, Colors).principal}>
      <Header textCenter={'Votre compte'} navigation={props.navigation} />
      <View
        style={{
          alignItems: 'center',
          zIndex: 3,
          // backgroundColor: Colors.White,
        }}>
        <View
          onLayout={event => {
            console.log(event.nativeEvent.layout);
            const { height: hg } = event.nativeEvent.layout;
            setYImage(hg);
          }}
          style={{
            borderWidth: 2,
            borderColor: Colors.Black + '99',
            width: widthImage + Spacings.tiny,
            height: widthImage + Spacings.tiny,
            borderRadius: widthImage + Spacings.tiny,
            justifyContent: 'center',
            alignItems: 'center',
            // transform: [{ translateY: (widthImage + Spacings.tiny) / 2 }],
          }}>
          <Images
            style={{
              width: widthImage,
              height: widthImage,
              margin: Spacings.tiny / 2,
              borderRadius: widthImage,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: Colors.PrimaryLight,
              borderRadius: 100,
            }}>
            <Icons
              name={'camera'}
              contained={false}
              isDark={false}
              size="small"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.White,
          transform: [{ translateY: -yImage / 2 }],
          paddingTop: yImage / 2,
          minHeight: height - yImage / 2,
        }}>
        <View
          style={{
            // transform: [{ translateY: (widthImage + Spacings.tiny) / 2 }],
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: Spacings.tiny,
          }}>
          <Types.Title>Nom et prenom</Types.Title>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icons
              name={'location'}
              contained={true}
              isDark={false}
              size="small"
            />
            <Text>Madagascar Fianaratsoa andrainjato</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>1</Text>
            <Icons
              name={'phone'}
              contained={true}
              isDark={false}
              size="small"
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icons
            name={'envelop'}
            contained={true}
            isDark={false}
            size="small"
          />
          <Text>Andrianantenainarasolondraibe@gmail.com</Text>
          {isEdit && (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.PrimaryLight,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: Spacings.borderRadius,
                marginLeft: Spacings.tiny,
              }}>
              <Icons
                name={'pencil'}
                contained={true}
                isDark={false}
                size="small"
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icons name={'phone'} contained={true} isDark={false} size="small" />
          <Text>+2634 80 840 08</Text>
          {isEdit && (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.PrimaryLight,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: Spacings.borderRadius,
                marginLeft: Spacings.tiny,
              }}>
              <Icons
                name={'pencil'}
                contained={true}
                isDark={false}
                size="small"
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icons
            name={'language'}
            contained={true}
            isDark={false}
            size="small"
          />
          <Text>Francais, Malgache</Text>
          {isEdit && (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.PrimaryLight,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: Spacings.borderRadius,
                marginLeft: Spacings.tiny,
              }}>
              <Icons
                name={'pencil'}
                contained={true}
                isDark={false}
                size="small"
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icons name={'clock'} contained={true} isDark={false} size="small" />
          <Text>Membre depuis 15/09/2021</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icons name={'keys'} contained={true} isDark={false} size="small" />
          <Text>Password</Text>
          {isEdit && (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.PrimaryLight,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: Spacings.borderRadius,
                marginLeft: Spacings.tiny,
              }}>
              <Icons
                name={'pencil'}
                contained={true}
                isDark={false}
                size="small"
              />
            </TouchableOpacity>
          )}
        </View>
        {isEdit ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: Spacings.small,
            }}>
            <TouchableOpacity
              onPress={() => setIsEdit(false)}
              style={{
                padding: Spacings.tiny,
                alignItems: 'center',
                backgroundColor: Colors.PrimaryLight,
                justifyContent: 'center',
                borderRadius: Spacings.borderRadius,
                margin: Spacings.tiny,
              }}>
              <Text>ENREGISTRER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsEdit(false)}
              style={{
                padding: Spacings.tiny,
                alignItems: 'center',
                backgroundColor: Colors.PrimaryLight,
                justifyContent: 'center',
                borderRadius: Spacings.borderRadius,
                margin: Spacings.tiny,
              }}>
              <Text>ANNULER</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: Spacings.small,
            }}>
            <TouchableOpacity
              onPress={() => setIsEdit(true)}
              style={{
                padding: Spacings.tiny,
                alignItems: 'center',
                backgroundColor: Colors.PrimaryLight,
                justifyContent: 'center',
                borderRadius: Spacings.borderRadius,
                margin: Spacings.tiny,
              }}>
              <Text>METTRE A JOUR</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = (props, Colors) =>
  StyleSheet.create({
    principal: {
      backgroundColor: Colors.PrimaryLight,
      flex: 1,
      padding: Spacings.tiny / 2,
    },
    header: {
      flexDirection: 'row',
    },
  });

export default User;
