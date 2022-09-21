import React from 'react';
import {ScrollView, View, Text, Animated} from 'react-native';
import {
  BlockBestProduit,
  Spacings,
  Colors as defColors,
  Button,
  Loading,
} from '../../';

function NewProduits(props) {
  const {datas, isScroll, onClickDelete} = props;
  const onClickNew = () => {
    props.navigation.push('StackNavigatorDeux', {
      screen: 'NewCatalogue',
    });
  };

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{marginTop: Spacings.tiny, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: Spacings.tiny,
        }}
      >
        <Text>{datas?.length} Catalogues</Text>
        <Button {...props} onPress={onClickNew}>
          Nouveau
        </Button>
      </View>
      {datas.length > 0 ? (
        isScroll ? (
          <Animated.FlatList
            data={datas || []}
            renderItem={({item, index}) => {
              return (
                <BlockBestProduit
                  key={index}
                  {...{scrollY, index, ...props}}
                  data={item}
                />
              );
            }}
            bounces={false}
            keyExtractor={(_, id) => id.toString()}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: false},
            )}
          />
        ) : (
          <View>
            {datas?.map((data, key) => {
              return (
                <BlockBestProduit {...{data, key, ...props, onClickDelete}} />
              );
            })}
          </View>
        )
      ) : (
        <Loading isEmpty={true} />
      )}
    </View>
  );
}

export default NewProduits;
