import React from 'react';
import './Character.css';

const Character = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h4><a href={props.url}>Movies</a></h4>
    </div>
  );
}

export default Character;
