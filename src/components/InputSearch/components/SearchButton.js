import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../../../actions';

import SearchProduct from '../../../helpers/searchProduct'

function SearchButton() {

  const { category, query } = useSelector(state => state)
  const dispatch = useDispatch()

  async function handleClick() {
    const value = await SearchProduct(category, query);
    dispatch(updateProducts(value))
  }
 
  return (
    <div>
      <button
        type='button'
        className="button"
        onClick={ handleClick }
      >
        Pesquisar
      </button>
    </div>
  );
}

export default SearchButton;
