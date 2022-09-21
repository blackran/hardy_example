import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, boolean, color, select } from '@storybook/addon-knobs';
import Images from './index';
import { me } from './me.jpg'

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('default',
    () => {
      return <View> 
        <Images
          src={me}
          styles={{ 
            width: 100,
            height: 100,
            backgroundColor: 'red'
          }}
        />
      </View>
    }
  )
