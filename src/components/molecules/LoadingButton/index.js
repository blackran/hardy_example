import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { Spacings, Colors as ColorsF } from '../../atoms';
import PropTypes from 'prop-types';

/*
 * Component avec loading
 */
const LoadingButton = props => {
  const { loading, label, onClick, disabled, style, isDark } = props;

  const Colors = ColorsF(isDark);
  return (
    <TouchableOpacity
      style={{ ...styles(props, Colors).container, ...style }}
      onPress={disabled ? () => {} : onClick}>
      {loading ? (
        <ActivityIndicator style={styles(props, Colors).indicator} animating />
      ) : (
        <Text style={styles(props, Colors).text}>{label || 'default'}</Text>
      )}
    </TouchableOpacity>
  );
};

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
  theme: PropTypes.string,
};

const styles = (props, Colors) => ({
  container: {
    position: 'relative',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacings.tiny,
    padding: Spacings[props.theme],
    backgroundColor: props.disabled ? Colors.Disabled : Colors.PrimaryDark,
  },
  text: {
    color: Colors.PrimaryLight,
  },
  indicator: {},
});

export default LoadingButton;
