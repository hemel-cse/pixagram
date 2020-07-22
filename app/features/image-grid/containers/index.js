import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Indicator from 'app/components/ActivityIndicator'
import { useDispatch, useSelector } from 'react-redux';
import * as imagesActions from '../actions';

const StyledView = styled(View)`
  align-items: center;
  justify-content: center;
`

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
     dispatch(imagesActions.requestImages(props.type, props.query));
  },[props.type, props.query]);

  if(images.length < 1 && props.type === 'imagesSaved') 
  return (
    <StyledView>
      <Text>No saved images found in the gallery!</Text>
    </StyledView>
  );

  if(!images || images.length < 1 || loading) 
  return (
    <Indicator />
  );

  return (
      <FlatList
          data={images}
          renderItem={({ item }) => (
            <StyledTouchableOpacity onPress={() => props?.navigation?.push("Image",{item})}>
                <StyledImage source={{ uri: item.previewURL }} />
            </StyledTouchableOpacity>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
  );
}

export default ImageGrid;
