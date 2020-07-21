import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';


const StyledIndicator = styled(ActivityIndicator)`
  align-item: center;
  justify-content: center;
`
  

const Indicator = () => (
  <ActivityIndicator animating={true} />
);

export default Indicator;
