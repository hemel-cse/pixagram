import React from 'react';
import { View } from 'react-native';

import ImageGrid from 'app/features/image-grid/containers';
import { IMAGES_SEARCH } from  'app/features/image-grid/types';
import styled from 'styled-components/native';

import SearchForm from 'app/components/Form/Search';


const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: #fff;
`

const Search = (props) => {

  const [search, setSearch] = React.useState('');

  const onSearch = (text) => {
     setSearch(text.search);
  }
  
  return (
    <StyledView>
      <SearchForm onSubmit={onSearch} />
      <ImageGrid type={IMAGES_SEARCH} query={search}/>
    </StyledView>
  );
}

export default Search;
