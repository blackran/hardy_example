import React from 'react';
import { View, Text } from 'react-native';
import {
  HeaderStackDeux,
  Spacings,
  Icons,
  Types,
  Colors as defColors,
} from '../../components';

function MyContacts(props) {
  const Colors = defColors(false);
  return (
    <View style={{ flex: 1, paddingBottom: Spacings.tiny }}>
      <HeaderStackDeux locate={'Contacte'} navigation={props.navigation} />
      <View style={{ padding: Spacings.base }}>
        <Types.Paragraph isDark={false}>
          Merci d'avoir utiliser l'application Panera.
        </Types.Paragraph>
        <Types.Paragraph isDark={false}>
          Votre commentaire sera le bievenue.
        </Types.Paragraph>
        <Text />
        <Types.Paragraph isDark={false}>Voici notre contacte:</Types.Paragraph>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icons
              name={'facebook'}
              contained={true}
              color={'#445fa0'}
              size="small"
            />
            <Text style={{ color: '#445fa0' }}>Facebook</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icons
              name={'gmail'}
              contained={true}
              color={'#f95959'}
              size="small"
            />
            <Text style={{ color: '#f95959' }}>Gmail</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icons
              name={'twitter'}
              contained={true}
              color={'#5aa8df'}
              size="small"
            />
            <Text style={{ color: '#5aa8df' }}>Twitter</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icons
              name={'whatsapp'}
              contained={true}
              color={'#20d466'}
              size="small"
            />
            <Text style={{ color: '#20d466' }}>Whatsapp</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icons
              name={'skype'}
              contained={true}
              color={'#01aef3'}
              size="small"
            />
            <Text style={{ color: '#01aef3' }}>Skype</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: Spacings.base,
          width: '100%',
        }}>
        <View
          style={{
            color: Colors.Black,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Icons
            name={'copyright'}
            contained={true}
            color={Colors.Black}
            size="small"
          />
          <Text>Copyright {new Date().getFullYear()}</Text>
        </View>
      </View>
    </View>
  );
}

export default MyContacts;
