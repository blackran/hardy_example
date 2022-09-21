import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './reducers/store';
import axios from 'axios';

import StackNavigator from './src/pages/StackNavigator';

const App = () => {
  axios.defaults.baseURL = 'http://10.42.0.1:4000';
  return (
    <Provider store={store}>
      <View style={styles.principal}>
        <StackNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  principal: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default App;
