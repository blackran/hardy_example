import React from 'react';
import { View, Text } from 'react-native';
import {
  Images,
  Spacings,
  Colors as defColors,
  Types,
  Dialog,
} from '../../../components';

function ListesUserVertical() {
  const Colors = defColors(false);
  const arrays = [0, 1, 2, 3];
  return (
    <View>
      {arrays.map((_, i) => {
        return (
          <View
            key={i}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <Images
              key={i}
              style={{
                width: Spacings.large,
                height: Spacings.large,
                borderRadius: Spacings.large,
                borderWidth: 2,
                borderColor: Colors.PrimaryLight,
                marginRight: Spacings.tiny,
              }}
            />
            <Types.Paragraph isDark={false} style={{ margin: 0, padding: 0 }}>
              nom et prenom
            </Types.Paragraph>
          </View>
        );
      })}
    </View>
  );
}

function ListesUser() {
  const Colors = defColors(false);
  const arrays = [0, 1, 2, 3];
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: Spacings.small * (arrays.length + 1),
        }}>
        {arrays.map((_, i) => {
          return (
            <Images
              key={i}
              style={{
                width: Spacings.large,
                height: Spacings.large,
                borderRadius: Spacings.large,
                borderWidth: 2,
                borderColor: Colors.PrimaryLight,
                position: 'relative',
                left: -Spacings.base * i,
              }}
            />
          );
        })}
        <Dialog
          content={<ListesUserVertical />}
          btnStyle={{
            width: Spacings.large,
            height: Spacings.large,
            borderRadius: Spacings.large,
            position: 'relative',
            backgroundColor: Colors.Black,
            justifyContent: 'center',
            alignItems: 'center',
            left: -Spacings.base * arrays.length,
            borderWidth: 2,
            borderColor: Colors.PrimaryLight,
          }}>
          <Text style={{ color: Colors.White, fontSize: Spacings.small - 3 }}>
            126+
          </Text>
        </Dialog>
      </View>
      <Types.Paragraph
        isDark={false}
        style={{ marginTop: Spacings.tiny, padding: 0 }}>
        126+ Persones
      </Types.Paragraph>
      <Types.Paragraph isDark={false} style={{ margin: 0, padding: 0 }}>
        deja contacter
      </Types.Paragraph>
    </View>
  );
}

export default ListesUser;
