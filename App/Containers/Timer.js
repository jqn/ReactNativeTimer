import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Display from '../Components/Display';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Display />
  </View>
);

export default Home;
