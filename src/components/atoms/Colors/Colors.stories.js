import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  text,
  withKnobs,
  boolean,
  color,
  select,
} from '@storybook/addon-knobs';
import Colors from './index';

function Affichage({ color, name }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: color,
          borderWidth: 1,
        }}></View>
      <Text>{name || ''}</Text>
    </View>
  );
}

storiesOf('Colors', module)
  .addDecorator(withKnobs)
  .add('Listes des Colors', () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {Object.entries(Colors).map(([name, color], key) => {
          return <Affichage {...{ name, color, key }} />;
        })}
      </View>
    );
  });
