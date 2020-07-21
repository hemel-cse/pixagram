import * as React from 'react';
import styled from 'styled-components/native';
import { Surface } from 'react-native-paper';

const StyledSurface = styled(Surface)`
  height: 100%;
  width: 100%;
  elevation: 4;
  padding: 0;
  margin: 0;
`
  

const SurfaceRoot = ({children}) => (
  <StyledSurface>
     {children}
  </StyledSurface>
);

export default SurfaceRoot;
