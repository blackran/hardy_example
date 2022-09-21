import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Images, Spacings, Colors as defColors } from '../../../components';

function ScrollImages(props) {
  const Colors = defColors(false);
  const topRef = React.useRef();
  const thumbRef = React.useRef();
  const { width: widthW, height: heightW } = props;
  const datas = [0, 1, 2, 3, 4, 5, 6, 8, 9];

  const [index, setIndex] = React.useState(0);
  const setIndexActive = i => {
    setIndex(i);
    topRef?.current?.scrollToOffset({
      offset: i * widthW,
      animated: true,
    });
    thumbRef?.current?.scrollToOffset({
      offset: (i * (Spacings.large + Spacings.tiny)) - (Spacings.large + Spacings.tiny),
      animated: true,
    });
  };

  return (
    <View>
      <FlatList
        ref={topRef}
        data={datas}
        keyExtractor={(_, id) => id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          setIndexActive(Math.round(ev.nativeEvent.contentOffset.x / widthW));
        }}
        renderItem={() => {
          return (
            <Images
              style={{
                width: widthW,
                height: heightW * (1 / 2),
              }}
            />
          );
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: Spacings.tiny,
          right: Spacings.tiny,
          width: (Spacings.large + Spacings.tiny) * 3,
        }}>
        <FlatList
          ref={thumbRef}
          data={datas}
          keyExtractor={(_, id) => id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={Spacings.large + Spacings.tiny}
          renderItem={({ index: i, item }) => {
            return (
              <TouchableOpacity onPress={() => setIndexActive(i)}>
                <Images
                  style={{
                    width: Spacings.large,
                    height: Spacings.large,
                    borderRadius: Spacings.borderRadius,
                    margin: Spacings.tiny / 2,
                    borderWidth: index === i ? 2 : 0,
                    borderColor: Colors.White,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

export default ScrollImages;
