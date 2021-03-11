import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../../actions';

import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';


function InputSearch() {

  const state = useSelector(state => state)

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(updateQuery(e.target.value))
  }

  return (
    <div className="content">
      <SearchInput
        onChange={ handleChange }
      />
      <div>
        <SearchButton
          state={ state }
        />
      </div>
    </div>
  );
}

export default InputSearch;
