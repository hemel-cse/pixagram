import * as React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';

const StyledView = styled(View)`
  flex: 1;
  justify-content: space-between;
`

const SnackBar = ({visible, onDismissSnackBar, onClose, text}) => {

  return (
    <StyledView>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Close',
          onPress: () => {
            onClose();
          },
        }}>
        {text}
      </Snackbar>
    </StyledView>
  );
};


export default SnackBar;
