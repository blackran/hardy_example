import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  paths,
  width,
  height,
  viewBox,
  stroke,
  strokeWidth,
} from './logo/icon';
import Svg from 'react-native-svg';
import { AnimatedSVGPath } from 'react-native-svg-animations';

const AnimatedStroker = ({ d, disableAnime }) => {
  const [fill, setFill] = React.useState(false);
  const duration = 1000;

  React.useEffect(() => {
    if (disableAnime) {
      setFill(true);
    } else {
      setTimeout(() => setFill(true), duration);
    }
  }, [d, disableAnime]);

  return (
    <AnimatedSVGPath
      strokeColor={'green'}
      duration={duration}
      delay={disableAnime ? 0 : 100}
      strokeWidth={strokeWidth}
      loop={false}
      fill={fill ? 'green' : 'none'}
      stroke={stroke}
      d={d}
    />
  );
};

function Logo(props) {
  const indexName = [3];
  const twidth = Math.abs(width - (width - props.size));
  const theight = Math.abs(height - (height - props.size));
  const newpaths = props.disableAnime ? (paths?.filter((_, i) => !indexName.includes(i))) : (paths);
  return (
    <View style={styles(props).principal}>
      <Svg
        width={twidth < width ? twidth : width}
        height={theight < height ? theight : height}
        viewBox={viewBox}>
        {newpaths?.map((d, key) => {
          return <AnimatedStroker key={key} d={d} disableAnime={props.disableAnime} />;
        })}
      </Svg>
    </View>
  );
}

const styles = props =>
  StyleSheet.create({
    principal: {
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Logo;
