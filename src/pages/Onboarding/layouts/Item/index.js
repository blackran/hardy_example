import React, {useState} from "react"
import { View, Dimensions  } from 'react-native'
import { Types, Images, } from '../../../../components'

const {width: windowWidth} = Dimensions.get('window');
function Item ({ item }) {
  return (<View style={{ width: windowWidth }}>
    <Images style={{width: windowWidth, height: windowWidth}}/>
    <Types.Title style={{ textAlign: 'center' }}>{item.title}</Types.Title>
    <Types.Paragraph style={{ textAlign: 'center' }}>{item.description}</Types.Paragraph>
  </View>)
}

export default Item
