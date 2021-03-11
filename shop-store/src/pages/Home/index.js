import React from 'react';
import { useSelector } from 'react-redux';

import InputSearch from '../../components/InputSearch';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card'

import '../../styles/bulma.min.css'
import '../../styles/searchGroup.css'

function Home() {

  const{ products, cartProduct } = useSelector(state => state)

  return (
    <>
      <NavBar products={ cartProduct }/>
      <InputSearch />
      <section className="content">
        { products.map(product => <>
          <Card
            thumbnail={ product.thumbnail }
            title={ product.title }
            price={ product.price }
            idOfEachProduct={ product.id }
          /> 
        </>) }
      </section>
    </>
  );
}

export default Home;
