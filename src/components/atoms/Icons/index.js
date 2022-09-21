import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgCss } from 'react-native-svg';
import { Colors as ColorsF, Spacings } from '../../atoms';

import { icons } from './datas';

function Icons(props) {
  const { size, name, style, onClick, contained, color, isDark, fill } = props;
  const Colors = ColorsF(isDark);
  const [firstKey, setFirstKey] = useState();
  useEffect(() => {
    const allKeys = Object.keys(icons);
    if (allKeys.length > 0) {
      setFirstKey(allKeys[0]);
    }
  }, []);

  const colorDefault = color || Colors.Black + 'aa';

  return (
    <View
      style={{ ...styles(props).principale, ...style }}
      onClick={onClick}
      className="Icons">
      {icons && (
        <SvgCss
          width={Spacings[size || 'base'] - 4}
          height={Spacings[size || 'base'] - 4}
          xml={icons[name] || icons[firstKey]}
          style={{
            originX: 30,
            originY: 30,
            scale: 0.9,
            justifyContent: 'center',
            alignItems: 'center',
            fill: fill || (contained ? colorDefault : 'none'),
            stroke: colorDefault,
          }}
        />
      )}
    </View>
  );
}

const styles = ({ size }) =>
  StyleSheet.create({
    principale: {
      width: (Spacings.base || Spacings[size]) + 4,
      height: (Spacings.base || Spacings[size]) + 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Icons;
