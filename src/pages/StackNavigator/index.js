import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Principal from '../Principal';
import Splash from '../Splash';
import Onboarding from '../Onboarding';
import Authentification from '../Authentification';
import StackNavigatorDeux from '../StackNavigatorDeux';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Authentification" component={Authentification} />
        <Stack.Screen name="Home" component={Principal} />
        <Stack.Screen name="StackNavigatorDeux" component={StackNavigatorDeux} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
