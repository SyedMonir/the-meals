import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Food.css';

const Food = ({ food, handleAddToCart }) => {
  //   console.log(props);
  const { strMeal, strMealThumb, strInstructions } = food;
  return (
    <div className="col-md-3 mb-3 card-container">
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
        <Button onClick={() => handleAddToCart(food)} className="addToMeal">
          Add to meal
        </Button>
      </Card>
    </div>
  );
};

export default Food;
