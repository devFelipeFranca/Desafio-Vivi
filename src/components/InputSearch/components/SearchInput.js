import React from 'react';

function SearchInput(props) {

  const { onChange } = props;

  return (
    <div>
      <input onChange={ onChange }  className="input" type="text" placeholder="Pesquisar"/>
    </div>
);
}

export default SearchInput;
