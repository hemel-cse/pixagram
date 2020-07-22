import React from 'react';
import { View } from 'react-native';

import ImageGrid from 'app/features/image-grid/containers';
import { IMAGES_SAVED } from  'app/features/image-grid/types';
import styled from 'styled-components/native';


const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: #fff;
`

const Saved = (props) => {

  return (
    <StyledView>
      <ImageGrid type={IMAGES_SAVED} query={""} {...props}/>
    </StyledView>
  );
}

export default Saved;
