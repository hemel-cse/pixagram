import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Indicator from 'app/components/ActivityIndicator'

const Saved = (props) => {
  return (
    <View style={styles.container}>
      <Indicator />
      <Text>Open up App.js to saved working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Saved;
