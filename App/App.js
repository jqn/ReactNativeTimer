import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from './Containers/Timer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkBackground: {
    backgroundColor: '#07121B',
  },
});

const App = () => (
  <View style={[styles.container, styles.darkBackground]}>
    <Timer />
  </View>
);

export default App;
