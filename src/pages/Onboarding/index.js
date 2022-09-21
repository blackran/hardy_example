import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Animated } from 'react-native';
import { Button, Spacings, Dots } from '../../components';
import Item from './layouts/Item';

const { width: windowWidth } = Dimensions.get('window');

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function Onboarding(props) {
  const [isEnd, setIsEnd] = React.useState(false);
  const [numPage, setNumPage] = React.useState(0);
  const datas = [
    {
      id: 1,
      image: 'image',
      title: 'title1',
      description: 'oajwioef oiawjefo waeo woefw 1',
    },
    {
      id: 2,
      image: 'image',
      title: 'title2',
      description: 'oajwioef oiawjefo waeo woefw 2',
    },
    {
      id: 3,
      image: 'image',
      title: 'title3',
      description: 'oajwioef oiawjefo waeo woefw 3',
    },
  ];

  const listViewBody = React.useRef();

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onEndScroll = ev => {
    setNumPage(ev.nativeEvent.contentOffset.x / windowWidth);
  };

  React.useEffect(() => {
    if (numPage === datas.length - 1) {
      setIsEnd(true);
    } else {
      setIsEnd(false);
    }
  }, [numPage, datas.length]);

  const onPressNext = () => {
    if (datas.length - 1 > numPage) {
      listViewBody.current._listRef._scrollRef.scrollTo({
        x: windowWidth * (numPage + 1),
        animated: true,
      });
      setNumPage(numPage + 1);
    }
    if (isEnd) {
      props.navigation.replace('Authentification');
    }
  };

  const onPressPrev = () => {
    if (numPage > 0) {
      listViewBody.current._listRef._scrollRef.scrollTo({
        x: windowWidth * (numPage - 1),
        animated: true,
      });
      setNumPage(numPage - 1);
    }
  };

  const onPressLast = () => {
    if (datas.length - 1 !== numPage) {
      listViewBody.current._listRef._scrollRef.scrollTo({
        x: windowWidth * (datas.length - 1),
        animated: true,
      });
      setNumPage(datas.length - 1);
    }
  };

  return (
    <View className="Onboarding" style={styles(props).principal}>
      <View style={styles(props).header}>
        <Button
          iconLeft="arrowLeft"
          theme="outline"
          className="onPressPrev"
          onPress={onPressPrev}
        />
        {!isEnd && (
          <Button className="onPressLast" onPress={onPressLast}>
            Sauter
          </Button>
        )}
      </View>
      <FlatList
        className="FlatListOnboarding"
        ref={listViewBody}
        data={datas}
        horizontal
        renderItem={({ item }) => <Item {...{ item }} />}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        keyExtractor={item => item.id}
        initialNumToRender={1}
        onMomentumScrollEnd={onEndScroll}
        onScoll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffeset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: false },
        )}
      />
      <View style={{ ...styles(props).footer }}>
        <Dots active={numPage} length={datas.length} />
        <Button className="ButtonOnboarding" onPress={onPressNext}>
          {isEnd ? 'Commencer' : 'Next'}
        </Button>
      </View>
    </View>
  );
}

const styles = props =>
  StyleSheet.create({
    principal: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: Spacings.tiny,
      position: 'absolute',
      top: 0,
      zIndex: 2,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: Spacings.tiny,
    },
  });

export default Onboarding;
