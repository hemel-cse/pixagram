import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageSingle from 'app/features/image-single/containers';
import styled from 'styled-components/native';


const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: #fff;
`


const Image = (props) => {
  return (
    <StyledView>
      <ImageSingle />
    </StyledView>
  );
}


export default Image;
