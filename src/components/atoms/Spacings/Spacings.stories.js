import React from 'react';
import {View, Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, boolean, color, select } from '@storybook/addon-knobs';
import Spacings from './index';

function Affichage ({spacing, name, min, max}) {
  const tabs = [];
  for (let i=0; i<(spacing/min); i++) {
    tabs.push(<View key={i} style={{ height: min, width: min, borderRightWidth: 1, borderColor: 'white' }}></View>)
  }
  console.log(tabs, (spacing/min))
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
    <View style={{ width: 2*max}}>
      <View style={{ height: min, width: spacing, flexDirection: 'row'}}>
        <View  
          style={{ 
            height: min, 
            width: spacing, 
            backgroundColor: 'black', 
            flexDirection: 'row', 
            position: 'absolute', 
            top: '50%',
            transform: 'translateY(-50%)'
        }}></View>
        <View style={{ height: min, width: spacing, flexDirection: 'row', borderLeftWidth: 1, borderColor: 'green'}}>
          { tabs }
        </View>
      </View>
    </View>
    <Text style={{ flex: 1 }}>{name||''} ({spacing} px)</Text>
  </View>
}

storiesOf('Spacings', module)
  .addDecorator(withKnobs)
  .add('Listes des Spacings',
    () => {
      const [max, setMax] = React.useState(0)
      const [min, setMin] = React.useState(0)
      return <View style={{ flex: 1}}>
        {
        Object.entries(Spacings).map(([name, spacing], key) => {
          if (spacing > max) {
            setMax(spacing)
          } 
          if (spacing < min || min === 0) {
            setMin(spacing)
          }
        return <Affichage {...{name, spacing, key, min, max}} />
        })
      }
      </View>
    }
  )
