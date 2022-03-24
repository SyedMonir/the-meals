import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Food.css';

const Food = (props) => {
  //   console.log(props);
  const { strMeal, strMealThumb, strInstructions, idMeal } = props.food;
  return (
    <div className="col-md-3 mb-3">
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title title={strMeal}>
            {strMeal.length >= 20 ? (
              <h4>{strMeal.slice(0, 17)}..</h4>
            ) : (
              <h4>{strMeal}</h4>
            )}
          </Card.Title>
          <Card.Text>{strInstructions.slice(0, 110)}...</Card.Text>
        </Card.Body>
        <Button
          onClick={() => props.handleAddToCart(idMeal)}
          className="addToMeal"
        >
          Add to meal
        </Button>
      </Card>
    </div>
  );
};

export default Food;
