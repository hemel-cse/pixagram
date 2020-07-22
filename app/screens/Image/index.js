import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageSingle from 'app/features/image-single/containers';
import styled from 'styled-components/native';


const StyledView = styled(View)`
  flex: 1;
  background-color: #fff;
`


const Image = (props) => {
  return (
    <StyledView>
      <ImageSingle  {...props}/>
    </StyledView>
  );
}


export default Image;
