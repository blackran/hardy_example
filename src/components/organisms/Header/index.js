import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import {
  Colors as ColorsF,
  Icons,
  FilterSearch,
  Types,
  Images,
} from '../../../components';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { Spacings } from '../../atoms';

const { height: heightW, width: widthW } = Dimensions.get('window');

function Header(props) {
  const { isDark, textCenter } = props;
  const dispatch = useDispatch();
  const Colors = ColorsF(isDark);
  const [value, setValue] = React.useState('');
  // onChangeInput={(e) => setValue(e)}
  const onChange = ({ value: val }) => {
    setValue(val);
  };

  const onSubmit = () => {
    if (props.navigation && isFavory) {
      props.navigation.push('Home', {
        screen: 'BottomNavigator',
        params: {
          screen: 'SearchTab',
        },
      });
    }
  };

  const onPressButtonLeft = () => {
    if (props.navigation) {
      props.navigation.openDrawer();
    }
  };

  const [isFavory, setIsFavory] = React.useState(false);
  React.useEffect(() => {
    const navigation = props.navigation.getState();
    const activeNavigation = navigation.routeNames[navigation.index];
    if (activeNavigation !== 'LikeTab' || !activeNavigation) {
      setIsFavory(true);
    }

    setShowParameter(false);
  }, [props.navigation]);

  const onPressToggle = () => {
    dispatch({ type: 'CHANGE_THEME', datas: { isDark: !isDark } });

    AsyncStorage.removeItem('isDarkPanera');
    const newIsDarkPanera = isDark ? '0' : '1';
    console.log({ newIsDarkPanera });
    AsyncStorage.setItem('isDarkPanera', isDark ? '0' : '1');
  };

  const [showParameter, setShowParameter] = React.useState(false);
  const [heightHeader, setHeightHeader] = React.useState(0);

  return (
    <>
      <View
        style={styles(props).header}
        onLayout={event => {
          const { height } = event.nativeEvent.layout;
          setHeightHeader(height);
        }}>
        <Types.Title> Pivarotra </Types.Title>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Icons name={'envelop'} contained={true} size="base" />
          <Icons name={'bell'} contained={true} size="base" />
          <Images
            style={{
              width: Spacings.large,
              height: Spacings.large,
              borderRadius: Spacings.large,
              marginLeft: Spacings.small,
            }}
          />
        </View>
      </View>
      {showParameter && (
        <FilterSearch
          style={{
            width: widthW,
            backgroundColor: Colors.White,
            position: 'absolute',
            bottom: 0,
            zIndex: 2,
          }}
          height={heightW - heightHeader - 80}
          {...{ setShowParameter, showParameter }}
        />
      )}
    </>
  );
}

const styles = props =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      zIndex: 3,
      alignItems: 'center',
      padding: Spacings.tiny,
    },
  });

export default Header;
