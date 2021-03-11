import React from 'react';
import { useSelector } from 'react-redux';

import InputSearch from '../../components/InputSearch';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card'
import MenuCategory from '../../components/InputSearch/components/MenuCategory';

import '../../styles/bulma.min.css'
import '../../styles/searchGroup.css'
import '../../styles/main.css'

function Home() {

  const{ products, cartProduct } = useSelector(state => state)

  return (
    <>
      <MenuCategory />      
      <div className='main'>
        <NavBar products={ cartProduct }/>
        <InputSearch />
        <div className="content main">
          { products.map(product => <>
            <Card
              thumbnail={ product.thumbnail }
              title={ product.title }
              price={ product.price }
              idOfEachProduct={ product.id }
            /> 
          </>) }
        </div>
      </div>
    </>
  );
}

export default Home;
