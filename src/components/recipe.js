import React from 'react';
import './recipe.css'

const Recipe =({ title, calories, image, ingredient }) => {
  return (
    <div className='recipe'>
      <h2>{title}</h2>
      <p>{calories}</p>
      <img src={image} alt="" />
      <ol>
        {ingredient.map(ele => (
          <li key={ingredient.indexOf(ele) + 1}>{ele.text}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;