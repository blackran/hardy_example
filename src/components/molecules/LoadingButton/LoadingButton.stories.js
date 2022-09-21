import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, boolean, color, select } from '@storybook/addon-knobs';
import LoadingButton from './index';

      // style={{ backgroundColor: color('color', ['#ff00ff', '#202020'], '#202020')}}
const option = {
  tiny: 'tiny',
  small: 'small',
  base: 'base',
  Rainbow: ['red', 'orange', 'etc']
}
storiesOf('LoadingButton', module)
  .addDecorator(withKnobs)
  .add('default',
    () =>
      <LoadingButton
      onClick={action('clicked')}
      label={text('Text', 'Label')}
      disabled={boolean('Disabled', false)}
      theme={select('theme', option, 'base')} 
    />
  )
  .add('loading',
    () => <LoadingButton 
      loading 
      label={text('Text', 'hello')}
      onClick={action('clicked')}
      theme={select('theme', option, 'base')} 
    />
  )
