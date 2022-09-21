import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import me from './me.jpg'

function Images(props) {
  const { style, src, alt } = props
  return (

    <View>
      <Image source={src || me} alt={alt || 'image'} style={{ ...styles(props).image, ...style }} />
    </View>
  );
}

const styles = (props) => StyleSheet.create({
  principal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
    overflow: 'hidden'
  }
});

export default Images;
