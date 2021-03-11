import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar(props) {

  const { products } = props;

  return (
    <div class="tabs is-centered">
      <ul>
        <li><Link to="/">Home</Link></li>
        <span>-</span>
        <li><Link to="/products_cart">Carrinho de Compras</Link></li>
        <li>Itens no carrinho: { products.length }</li>
      </ul>
    </div>
  );
}

NavBar.propTypes = {
  products: PropTypes.string.isRequired,
}

export default NavBar;
