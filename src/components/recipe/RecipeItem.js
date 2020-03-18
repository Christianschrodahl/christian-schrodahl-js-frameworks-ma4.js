import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import IngredientsList from "../ingredients/IngredientsList";

function RecipeItem({ id, name, image, ingredients }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <IngredientsList ingredients={ingredients}></IngredientsList>
      </Card.Body>
    </Card>
  );
}

RecipeItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired
};

export default RecipeItem;
