import React from 'react';
import { View } from 'react-native';
import Indicator from 'app/components/ActivityIndicator'

import ImageSingle from 'app/features/image-single/containers';
import styled from 'styled-components/native';


const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: #fff;
`


const Saved = (props) => {
  return (
    <StyledView>
      <ImageSingle />
      <Indicator />
    </StyledView>
  );
}

export default Saved;
