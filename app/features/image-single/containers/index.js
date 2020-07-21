import React from 'react';
import { Text, View } from 'react-native';

import metrics from 'app/lib/config/metrics';

const imageHeight = Math.round(metrics.screenWidth * 9 / 16);
const imageWidth = metrics.screenWidth;


const ImageSingle = (props) => {
  console.log(imageHeight, imageWidth);

  return (
    <View>
      <Text>Open up App.js to single image working on your app!</Text>
    </View>
  );
}


export default ImageSingle;
