import React, { Component, useState } from 'react';
import './index.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

const ingredientSeed = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'},
];

function App() {
  // TODO useState
  const [ingredients, setIngredients] = useState(ingredientSeed);
  const [stack, setStack] = useState([]);

  // TODO declare some functions
  function stackBurger(e) {
    let ingredientToAdd = ingredients.filter(ing => ing.name === e.target.innerText);
    setStack([ingredientToAdd[0], ...stack]);
  }

  function clear() {
    setStack([]);
  }

  return (
    <div>
      <IngredientList ingredients={ingredients} stackBurger={stackBurger} />
      <BurgerPane stack={stack} clear={clear} />
      {/* List components */}

    </div>
  );
}

export default App;
