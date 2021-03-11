import React from 'react';
import { useSelector } from 'react-redux';

import NavBar from '../../components/NavBar';

function Cart() {

  const productsFromCart = useSelector(state => state.cartProduct)

  return (
    <>
      <div className='Content'>
      <NavBar products={ productsFromCart } />
        <div className="content">
          { productsFromCart.map(product => (
            <div dangerouslySetInnerHTML={{__html: product}} />
          )) }
        </div>
      </div>
    </>
  );
}

export default Cart;
