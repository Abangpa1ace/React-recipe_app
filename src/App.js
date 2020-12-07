import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/recipe'

const App = () => {

  const App_ID = '048e928d';
  const App_KEY = '34afb0b5360a7ed52d0ec95116476f89';

  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [search, setSearch] = useState('chicken');

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${App_ID}&app_key=${App_KEY}`)
    const data = await res.json();
    setRecipes(data.hits)
  }

  useEffect(() => {
    getRecipes();
  }, [search]);

  const onChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(keyword);
    setKeyword('');
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={onSubmit}>
        <input className="search-bar" type="text" value={keyword} onChange={onChange}></input>
        <button className="search-btn" type="submit">search</button>
      </form>
      <div className="recipe-container">
        {recipes.map(ele => (
          <Recipe key={recipes.indexOf(ele)+1} title={ele.recipe.label} calories={ele.recipe.calories} image={ele.recipe.image} ingredient={ele.recipe.ingredients} />
        )
          )}
      </div>
    </div>
  )
}

export default App;
