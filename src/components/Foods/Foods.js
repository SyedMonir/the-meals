
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Foods.css';

const Foods = () => {
  return (
    <div>
      <InputGroup className="my-4 w-75 m-auto">
        <FormControl
          placeholder="Search your meal"
          aria-label="Search your meal"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default Foods;
