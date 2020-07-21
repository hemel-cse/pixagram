import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as imagesActions from '../actions';




const ImageGrid = (props) => {
    
  const loading = useSelector(state => state.imagesReducer.isLoading);
  const images = useSelector(state => state.imagesReducer[props.type]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(images.length < 1) dispatch(imagesActions.requestImages(props.type, props.query));
  },[]);

  console.log('isLoading', loading);
  console.log('isLoading', images.length);

  const items = Array.apply(null, Array(60)).map((v, i) => {
    return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
  });

  return (
      <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 1,
  },
});

export default ImageGrid;
