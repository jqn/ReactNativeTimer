import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Display = ({minutes, seconds}) => (
  <View style={styles.container}>
    <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
  </View>
);

Display.defaultProps = {minutes: '00', seconds: '00'};

Display.propTypes = {minutes: PropTypes.string, seconds: PropTypes.string};

export default Display;
