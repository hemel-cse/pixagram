import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import metrics from 'app/lib/config/metrics';

const imageHeight = Math.round(metrics.screenWidth * 9 / 16);
const imageWidth = metrics.screenWidth;


const ImageSingle = (props) => {
  console.log(imageHeight, imageWidth);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to single image working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageSingle;
