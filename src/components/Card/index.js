import React from 'react';
import AddButton from './components/AddButton';

function Card(props) {

  const { thumbnail, title, price, idOfEachProduct } = props;

  return (
    <div className="content" id={ idOfEachProduct }  >
      <div className='Card-box'>
        <img className="Img-card" src={ thumbnail } alt="Placeholder image" /> 
        <div class="">
          <p class="nome-do-produto">{ title }</p>
          <div>
          <p className="price">R$ { price.toFixed(2) }</p>
        </div>
      </div>
      <AddButton
        idOfEachProduct={ idOfEachProduct }
      />
      </div>
    </div>
  );
}

export default Card;