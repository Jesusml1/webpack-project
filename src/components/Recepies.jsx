import { useState } from "react";

const clothes = {
  shoes: 2,
  shirts: 4,
  pants: 5,
};

const things = {
  ...clothes,
  table: 4,
  glass: 7,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);

  return (
    <div>
      <h3>Current Recipes:</h3>
      <button onClick={() => setRecipe(clothes)}>Clothes</button>
      <button onClick={() => setRecipe(things)}>Things</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
