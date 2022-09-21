import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import Details from '../Details';
import MyContacts from '../MyContacts';
import NewCatalogue from '../NewCatalogue';

const Stack = createStackNavigator();

function StackNavigator(props) {
  console.log(NewCatalogue);
  return (
    <Animated.View
      style={{
        flex: 1,
        borderWidth: 0,
        overflow: 'hidden',
        ...props.drawerAnimationStyle,
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="MyContacts" component={MyContacts} />
        <Stack.Screen name="NewCatalogue" component={NewCatalogue} />
      </Stack.Navigator>
    </Animated.View>
  );
}

export default StackNavigator;
