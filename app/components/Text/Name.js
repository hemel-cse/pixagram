import styled from 'styled-components/native';
import { Title } from 'react-native-paper';

const StyledTitle = styled(Title)`
  font-size: 16px;
  font-weight: 500;
`

const Name = (props) => {
    const { name } = props;

    return (
        <StyledTitle {...props}>{name}</StyledTitle>
    )
}

export default Name
