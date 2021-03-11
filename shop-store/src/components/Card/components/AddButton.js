import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductsToCart } from '../../../actions';

function AddButton(props) {

  const { idOfEachProduct } = props;
  const dispatch = useDispatch()

  function handleClick(e) {
    const id = e.target.value;
    const products = document.getElementById(id);
    dispatch(addProductsToCart(products.innerHTML))
  }

  return (
    <div className="Card-Box">
      <button value={ idOfEachProduct } className="button" onClick={ handleClick } type="button">
        Adicionar ao Carrinho
      </button>
    </div > 
  );
}

export default AddButton;
