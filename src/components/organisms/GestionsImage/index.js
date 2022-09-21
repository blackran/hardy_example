import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Icons,
  Images,
  Spacings,
  Button,
  Colors as ColorsF,
  Types,
} from '../../../components';
import * as ImagePicker from 'react-native-image-picker';

const {width: widthW} = Dimensions.get('window');

function GestionsImage(props) {
  const {datasImage, setDatasImage, isPrincipal, setIsPrincipal} = props;
  const Colors = ColorsF(false);

  const handleChoosePhoto = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker?.launchImageLibrary(options, response => {
      if (response.didCancel) {
        return null;
      } else if (response?.assets[0].uri) {
        const _id = Date.now();
        setDatasImage([{_id, photo: response?.assets[0]}, ...datasImage]);
        if (!isPrincipal) {
          setIsPrincipal(_id);
        }
      } else {
        return null;
      }
    });
  };

  const onClickDelet = _id => {
    setDatasImage(datasImage.filter(dataImage => dataImage._id !== _id));
  };

  return (
    <View>
      <Types.Title style={{ textAlign: 'center'}}>{`${datasImage.length}/4`}</Types.Title>
      <View
        style={{
          backgroundColor: Colors.Disabled,
          borderRadius: Spacings.borderRadius,
          height: widthW * (1 / 2) + Spacings.tiny * 2,
        }}
      >
        <FlatList
          data={datasImage}
          keyExtractor={(_, id) => id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item: {_id, photo}}) => {
            return (
              <View style={{...styles.containerImage}}>
                <Images
                  style={{
                    width: widthW * (1 / 2),
                    height: widthW * (1 / 2),
                    margin: Spacings.tiny,
                    borderRadius: Spacings.borderRadius,
                  }}
                  src={{
                    uri: photo.uri,
                  }}
                />

                <TouchableOpacity
                  style={{...styles.iconImageLeft}}
                  onPress={() => setIsPrincipal(_id)}
                >
                  <Icons
                    name={'heart'}
                    contained={true}
                    color={Colors.Error + '99'}
                    isDark={true}
                    fill={
                      _id === isPrincipal ? Colors.Error : Colors.White + '99'
                    }
                    style={{
                      left: -(Spacings.tiny * 2) / 3,
                      position: 'relative',
                      top: Spacings.tiny,
                    }}
                  />
                </TouchableOpacity>

                <View style={{...styles.iconImage}}>
                  <Button
                    iconLeft="bin"
                    stylePrincipal={{
                      backgroundColor: Colors.White,
                    }}
                    onPress={() => onClickDelet(_id)}
                    {...props}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          iconLeft="download"
          onPress={handleChoosePhoto}
          theme="contained"
          {...props}
          disable={datasImage.length>=4}
        >
          Nouveau image
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    position: 'relative',
  },
  iconImage: {
    position: 'absolute',
    top: Spacings.tiny,
    right: Spacings.small - 6,
  },
  iconImageLeft: {
    position: 'absolute',
    top: Spacings.tiny,
    left: Spacings.small - 6,
  },
});

export default GestionsImage;
