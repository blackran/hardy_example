import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import Button from '../components/molecules/Button';
import PaginationHelpers from '../components/organisms/PaginationHelpers';
import Image from '../components/atoms/Images';
import me from './statics/images/me.jpg';

const {width, height: screen_h} = Dimensions.get('window');

function Helper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [datas, setDatas] = useState([]);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  useEffect(() => {
    setDatas([0, 1, 2, 3]);
  }, []);

  const viewableItemsChange = useCallback(viewableItems => {
    console.log({viewableItems});
    // Use viewable items in state or as intended
  }, []);

  const viewConfigRef = React.useRef({
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 50,
    itemVisiblePercentThreshold: 50,
  });

  return (
    <View>
      <Button onClick={() => console.log('ca marche')}>Body Helper</Button>
      <Text>curenteIndex: {currentIndex}</Text>
      <View style={styles.containerFlatList}>
        <Animated.FlatList
          data={datas}
          renderItem={({item, index}) => {
            return (
              <View style={styles.containerImage} key={index.toString()}>
                <Image src={me} styles={styles.image} />
              </View>
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={false}
          keyExtractor={(_, index) => index.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChange.current}
          viewabilityConfig={viewConfigRef.current}
          ref={slidesRef}
        />
      </View>
      <PaginationHelpers />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width - 20,
    height: width - 20,
  },
  containerFlatList: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Helper;
