import React from 'react';
import { Image, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { useDispatch, useSelector } from 'react-redux';
import * as imagesActions from '../actions';

const StyledTouchableOpacity = styled(TouchableOpacity)`
  margin: 1px;
  flex: 1;
  flex-direction: column;
`

const StyledImage = styled(Image)`
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
`


const ImageGrid = (props) => {
    
  const loading = useSelector(state => state.imagesReducer.isLoading);
  const images = useSelector(state => state.imagesReducer[props.type]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(images.length < 1) dispatch(imagesActions.requestImages(props.type, props.query));
  },[props.type, props.query]);

  console.log('isLoading', loading);
  console.log('isLoading', images.length, typeof images);
  console.log('isLoading', props.type);

  const items = Array.apply(null, Array(60)).map((v, i) => {
    return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
  });

  return (
      <FlatList
          data={items}
          renderItem={({ item }) => (
            <StyledTouchableOpacity onPress={() => console.log(item)}>
                <StyledImage source={{ uri: item.src }} />
            </StyledTouchableOpacity>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
  );
}

export default ImageGrid;
