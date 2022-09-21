import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Dot } from '../../molecules';

function Pagination(props) {
  return (
    <View style={styles.principale}>
      {[0, 1, 2, 3].map(e => {
        return <Dot {...props} key={e} active={e % 2 === 0} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  principale: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pagination;
