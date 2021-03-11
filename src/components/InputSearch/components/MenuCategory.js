import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../../actions';

import categories from '../../../mock/categories.json';

import '../../../styles/sidenav.css'

function MenuCategory() {

  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(updateCategory(e.target.id))
  }

  return (
    <>
     <aside class="sidenav">
        <h1 class="menu-label title is-6">
          - Categorias -
        </h1>
        <ul class="menu-list">
          {categories.map(category => (
            <li><a onClick={ handleClick } id={ category.id } >{ category.name }</a></li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default MenuCategory;