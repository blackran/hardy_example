import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import {
  Images,
  Spacings,
  Icons,
  Colors as defColors,
  Types,
  Contacts,
} from '../../';

function BlockBestProduit(props) {
  const Colors = defColors(false);
  const ITEM_HEIGHT = Spacings.tiny * 10 + Spacings.tiny;
  const [isFavoris, setIsFavoris] = useState(false);
  let scale = new Animated.Value(1);
  let opacity = new Animated.Value(1);
  if (props.scrollY) {
    const inputRange = [
      -1,
      0,
      ITEM_HEIGHT * props.index,
      ITEM_HEIGHT * (props.index + 2),
    ];
    const opacityInputRange = [
      -1,
      0,
      ITEM_HEIGHT * props.index,
      ITEM_HEIGHT * (props.index + 1),
    ];
    scale = props.scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    opacity = props.scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });
  }
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        props.navigation.push('Home', {
          screen: 'StackNavigatorDeux',
          params: {
            screen: 'Details',
          },
        });
      }}
    >
      <Animated.View
        style={{
          flexDirection: 'row',
          margin: Spacings.tiny / 2,
          height: ITEM_HEIGHT,
          backgroundColor: Colors.White,
          overflow: 'hidden',
          borderRadius: Spacings.borderRadius,
          transform: [{scale}],
          opacity,
        }}
      >
        <Images
          style={{
            width: Spacings.tiny * 9,
            height: Spacings.tiny * 10,
            margin: Spacings.tiny / 2,
            borderRadius: Spacings.borderRadius,
          }}
        />
        <View style={{flex: 1, padding: Spacings.tiny}}>
          <View>
            <Types.Title isDark={false} size={'small'}>
              {props.data?.nom}
            </Types.Title>
            <Types.Paragraph isDark={false}>
              {props.data?.description}
            </Types.Paragraph>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: Spacings.tiny,
              left: Spacings.tiny,
              zIndex: 2,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Spacings.xlarge - 3,
              }}
              onPress={() => setIsFavoris(!isFavoris)}
            >
              <Text
                style={{
                  color: Colors.Error + '99',
                  fontWeight: 'bold',
                  position: 'relative',
                  top: Spacings.tiny,
                }}
              >
                +9
              </Text>
              <Icons
                name={'heart'}
                contained={isFavoris}
                color={Colors.Error + '99'}
                isDark={true}
                size="small"
                fill={isFavoris ? Colors.Error : Colors.White + '99'}
                style={{
                  left: -(Spacings.tiny * 2) / 3,
                  position: 'relative',
                  top: Spacings.tiny,
                }}
              />
            </TouchableOpacity>
            <Contacts
              {...props}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Spacings.xlarge - 3,
              }}
            >
              <Text
                style={{
                  color: Colors.Black + '99',
                  fontWeight: 'bold',
                  position: 'relative',
                  top: Spacings.tiny,
                }}
              >
                01
              </Text>
              <Icons
                name={'phone'}
                contained={true}
                color={Colors.Black + '99'}
                isDark={true}
                size="small"
                style={{
                  left: -(Spacings.tiny * 2) / 3,
                  position: 'relative',
                  top: Spacings.tiny,
                }}
              />
            </Contacts>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Spacings.xlarge - 3,
              }}
            >
              <Types.Paragraph
                isDark={false}
                style={{
                  marginLeft: 0,
                  position: 'relative',
                  top: Spacings.tiny,
                }}
              >
                4.5
              </Types.Paragraph>
              <Icons
                name={'star'}
                color={Colors.Yellow}
                contained={true}
                isDark={true}
                size="small"
                style={{
                  marginLeft: 0,
                  position: 'relative',
                  left: -(Spacings.tiny * 2) / 3,
                  top: Spacings.tiny,
                }}
              />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: Spacings.tiny / 2,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: Colors.PrimaryDark + '99',
                margin: Spacings.tiny / 2,
                borderRadius: Spacings.borderRadius,
              }}
              onPress={() => props.onClickDelete(props.data?._id)}
            >
              <Icons
                name={'bin'}
                contained={true}
                color={Colors.PrimaryDark}
                isDark={false}
                size="base"
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: Colors.PrimaryDark + '99',
                margin: Spacings.tiny / 2,
                borderRadius: Spacings.borderRadius,
              }}
            >
              <Icons
                name={'pencil'}
                contained={true}
                color={Colors.PrimaryDark}
                isDark={false}
                size="base"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: Spacings.tiny / 2,
            }}
          >
            <Text
              style={{
                includeFontPadding: false,
                height: 22,
                fontSize: Spacings.base - 1,
                color: Colors.Black,
                fontWeight: 'bold',
                justifyContent: 'flex-end',
              }}
            >
              15000
            </Text>
            <View style={{marginLeft: 1}}>
              <Text
                style={{
                  fontSize: Spacings.tiny,
                  color: Colors.Black + '99',
                  bottom: -2,
                }}
              >
                Ar
              </Text>
              <Text
                style={{
                  fontSize: Spacings.tiny,
                  color: Colors.Black + '99',
                }}
              >
                /mois
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default BlockBestProduit;
