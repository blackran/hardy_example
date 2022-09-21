import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  HeaderStackDeux,
  Spacings,
  ListesUser,
  ScrollImages,
  Types,
  Colors as defColors,
  Icons,
  Contacts,
} from '../../components';
import Moment from 'react-moment';
import 'moment/locale/fr';

const { width, height } = Dimensions.get('window');
function Details(props) {
  const Colors = defColors(false);
  const [isFavoris, setIsFavoris] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <HeaderStackDeux navigation={props.navigation} />
      <ScrollView>
        <View>
          <ScrollImages {...{ width, height }} />
          <View
            style={{
              position: 'absolute',
              // bottom: Spacings.tiny + 4,
              // left: Spacings.tiny,
              bottom: 0,
              left: 0,
              zIndex: 2,
              flexDirection: 'row',
              backgroundColor: '#000000' + '99',
              paddingLeft: Spacings.tiny,
            }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => setIsFavoris(!isFavoris)}>
              <Text
                style={{
                  color: Colors.Error,
                  fontWeight: 'bold',
                }}>
                +9
              </Text>
              <Icons
                name={'heart'}
                contained={isFavoris}
                color={Colors.Error}
                isDark={true}
                size="small"
                fill={isFavoris ? Colors.Error : Colors.White + '99'}
                style={{
                  left: -Spacings.tiny / 2,
                  position: 'relative',
                }}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  color: Colors.White,
                  fontWeight: 'bold',
                  position: 'relative',
                }}>
                01
              </Text>
              <Icons
                name={'phone'}
                contained={true}
                color={Colors.White}
                isDark={true}
                size="small"
                style={{
                  left: -Spacings.tiny / 2,
                  position: 'relative',
                }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  color: Colors.Yellow,
                  fontWeight: 'bold',
                  position: 'relative',
                }}>
                4.5
              </Text>
              <Icons
                name={'star'}
                color={Colors.Yellow}
                contained={true}
                isDark={true}
                size="small"
                style={{
                  marginLeft: 0,
                  position: 'relative',
                  left: -Spacings.tiny / 2,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: Spacings.tiny,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icons
                name={'clock'}
                contained={true}
                isDark={false}
                size="base"
                style={{
                  width: Spacings.base,
                  height: Spacings.base,
                }}
              />
              <Types.Paragraph
                isDark={false}
                size={'small'}
                style={{ includeFontPadding: false }}>
                Publiee il y a{' '}
                <Moment element={Text} fromNow ago locale="fr">
                  {new Date()}
                </Moment>
              </Types.Paragraph>
            </View>
            <View>
              <Text>Details</Text>
              <Text>Une douche</Text>
              <Text>1 Etages</Text>
              <Text>Eau et courant electrique</Text>
            </View>
          </View>
          <ListesUser />
        </View>
      </ScrollView>
      <View
        style={{
          width: width,
          position: 'absolute',
          bottom: 0,
          // right: Spacings.xlarge,
          justifyContent: 'space-around',
        }}>
        <Contacts
          {...props}
          style={{
            padding: Spacings.tiny,
            backgroundColor: Colors.White,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icons
            name={'phone'}
            contained={true}
            color={Colors.Black}
            isDark={true}
            size="base"
          />
          <Text
            style={{
              fontSize: Spacings.small,
              color: Colors.Black,
            }}>
            {'Contacter'.toUpperCase()}
          </Text>
        </Contacts>
      </View>
    </View>
  );
}

export default Details;
