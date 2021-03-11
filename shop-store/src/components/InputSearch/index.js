import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../../actions';
import SearchButton from './components/SearchButton';


function InputSearch() {

  const state = useSelector(state => state)

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(updateQuery(e.target.value))
  }

  return (
    <div className="content">
      <div>
      <input onChange={ handleChange }  className="input" type="text" placeholder="Pesquisar"/>
      </div>
      <SearchButton state={ state }/>
      <div>
        {/* <DropDown /> */}
      </div>
      <div className="content">
      {/* { products.map((product) => Card(product.thumbnail, product.title, product.price, product.id)) } */}
      </div>
    </div>
  );
}

export default InputSearch;
