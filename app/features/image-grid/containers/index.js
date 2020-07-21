import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as imagesActions from '../actions';

const ImageGrid = (props) => {
    
  const loading = useSelector(state => state.imagesReducer.isLoading);
  const dispatch = useDispatch();

//   const getImages = () => dispatch(imagesActions.requestImage(type));

  console.log('isLoading', loading);


  return (
    <View style={styles.container}>
      <Text>Open up App.js to ImageGrid working on your app!</Text>
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

export default ImageGrid;
