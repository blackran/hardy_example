import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Colors as Col, Spacings, Images, Icons } from '../../atoms';
import Moment from 'react-moment';
import 'moment/locale/fr';

const { width: widthW } = Dimensions.get('window');

function UserMessageChat(props) {
  const { isRight } = props;

  const Colors = Col(false);

  return (
    <View
      style={{
        alignItems: isRight ? 'flex-end' : 'flex-start',
        overflow: 'hidden',
        paddingTop: Spacings.tiny / 2,
      }}>
      <View
        style={{
          overflow: 'hidden',
          backgroundColor: Colors.White,
          padding: Spacings.tiny / 2,
          borderRadius: Spacings.borderRadius,
        }}>
        <View style={{ ...styles(props, Colors).principal }}>
          {!isRight && (
            <Images
              style={{
                width: Spacings.large,
                height: Spacings.large,
                margin: Spacings.tiny / 2,
                borderRadius: Spacings.borderRadius,
              }}
            />
          )}
          <View
            style={{
              padding: Spacings.tiny / 2,
              paddingTop: 0,
              paddingRight: Spacings.tiny,
            }}>
            <Text
              style={{
                color: Colors.Black,
                maxWidth: widthW - Spacings.xxllarge - 8,
              }}>
              I have different software products for one single service, which
              needs to be deployed to a single server. The clients are built
              with react,
            </Text>
          </View>
          {isRight && (
            <Images
              style={{
                width: Spacings.large,
                height: Spacings.large,
                margin: Spacings.tiny / 2,
                borderRadius: Spacings.borderRadius,
              }}
            />
          )}
        </View>
        <View
          style={{
            // margin: Spacings.tiny / 2,
            marginTop: 0,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icons
            name={'clock'}
            color={'#00000055'}
            contained={true}
            isDark={false}
            size="small"
            style={{
              width: Spacings.small,
              height: Spacings.small,
            }}
          />
          <Text
            style={{
              includeFontPadding: false,
              fontSize: Spacings.small - 4,
              opacity: 0.5,
            }}>
            il y a{' '}
            <Moment element={Text} fromNow ago locale="fr">
              {new Date()}
            </Moment>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = (props, Colors) =>
  StyleSheet.create({
    principal: {
      flexDirection: 'row',
      borderRadius: Spacings.borderRadius,
      position: 'relative',
      ...props.style,
    },
    imageUser: {
      right: 4,
      zIndex: 1,
      top: '50%',
      transform: [{ translateY: -((Spacings.base + 8) / 2) }],
    },
  });

export default UserMessageChat;
