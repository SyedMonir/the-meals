import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import Food from '../Food/Food';
import './Foods.css';

const Foods = ({ handleAddToCart, cart }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((response) => response.json())
      .then((data) => setFoods(data.meals));
  }, []);
  return (
    <section>
      <InputGroup className="my-4 w-50 m-auto">
        <FormControl
          placeholder="Search your meal"
          aria-label="Search your meal"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      <section id="foods-container">
        <Container>
          <Row>
            {foods.map((food) => (
              <Food
                key={food.idMeal}
                food={food}
                handleAddToCart={handleAddToCart}
                cart={cart}
              ></Food>
            ))}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Foods;
