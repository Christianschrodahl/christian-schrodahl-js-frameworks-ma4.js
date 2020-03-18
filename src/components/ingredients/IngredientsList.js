import React from "react";

function IngredientsList({ ingredients }) {
  const ingredientsArr = ingredients.split(",");
  return (
    <ul>
      {ingredientsArr.map(i => (
        <li>{i}</li>
      ))}
    </ul>
  );
}

export default IngredientsList;
