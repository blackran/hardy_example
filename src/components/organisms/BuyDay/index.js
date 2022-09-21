import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Spacings, Colors as defColors, Button } from '../../';

const { width: widthW } = Dimensions.get('window');

function BuyDay(props) {
  const [day, setDay] = React.useState(1);
  const Colors = defColors(false);

  const moin = () => {
    if (day > 1) {
      setDay(day - 1);
    }
  };

  const plus = () => {
    setDay(day + 1);
  };

  const setDouble = value => {
    if (parseInt(value, 10) < 10) {
      return '0' + value;
    }
    return '' + day;
  };
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View style={{ width: widthW - Spacings.tiny * 12 }} />
      <Text style={{ fontSize: Spacings.small }}>ACHETER JOURS</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: Spacings.tiny,
        }}>
        <TouchableOpacity
          onPress={moin}
          style={{
            borderWidth: 1,
            borderColor: Colors.Black + 'aa',
            borderRadius: Spacings.borderRadius,
            width: Spacings.base + 4,
            height: Spacings.base + 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Spacings.small,
              includeFontPadding: false,
              color: Colors.Black,
            }}>
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: Colors.Black,
            width: Spacings.base + 4,
            textAlign: 'center',
            fontSize: Spacings.small,
          }}>
          {setDouble(day)}
        </Text>
        <TouchableOpacity
          onPress={plus}
          style={{
            borderWidth: 1,
            borderColor: Colors.Black + 'aa',
            borderRadius: Spacings.borderRadius,
            width: Spacings.base + 4,
            height: Spacings.base + 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Spacings.small,
              includeFontPadding: false,
              color: Colors.Black,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        {...props}
        stylePrincipal={{
          width: (Spacings.base + 4) * 3,
        }}
        onPress={() => null}>
        Acheter
      </Button>
    </View>
  );
}

export default BuyDay;
