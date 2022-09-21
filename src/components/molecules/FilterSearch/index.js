import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import {
  Icons,
  Colors as defColors,
  Spacings,
  SlideProgress,
} from '../../../components';

function FilterSearch(props) {
  const Colors = defColors(false);
  const { style, setShowParameter, showParameter, height } = props;

  const translate = React.useRef(new Animated.Value(height)).current;

  React.useEffect(() => {
    if (showParameter) {
      Animated.spring(translate, {
        toValue: showParameter ? 0 : height,
        duration: 10000,
        useNativeDriver: false,
      }).start();
    }
  }, [showParameter, height, translate]);

  return (
    <Animated.View
      style={{
        ...style,
        height,
        borderTopLeftRadius: Spacings.borderRadius,
        borderTopRightRadius: Spacings.borderRadius,
        transform: [{ translateY: translate }],
      }}>
      <View style={{ display: 'flex', alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={() => setShowParameter(false)}>
          <Icons
            name={'cross'}
            contained={true}
            color={Colors.Black}
            isDark={false}
            size="small"
            style={{ margin: Spacings.tiny }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <SlideProgress />
        </View>
      </View>
    </Animated.View>
  );
}

export default FilterSearch;
