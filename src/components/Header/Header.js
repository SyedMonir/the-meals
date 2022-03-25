import React, { useState } from 'react';
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FaOpencart } from 'react-icons/fa';

const Header = ({ cart }) => {
  // console.log(cart);
  // For modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">The Meals</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button className="cartMenu" onClick={handleShow}>
                <FaOpencart></FaOpencart>
                <sup>{cart.length}</sup>
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Your meals:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {cart.map((food) => (
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <img
                        width={100}
                        src={food.strMealThumb}
                        className="img-fluid"
                        key={food.idMeal}
                        alt={food.strMeal}
                      />

                      <h5>{food.strMeal}</h5>

                      <div className="d-flex justify-content-center">
                        <Button variant="primary">-</Button>
                        <input type="number" width={50} />
                        <Button variant="primary">+</Button>
                      </div>

                      <Button variant="secondary">Buy now</Button>
                    </div>
                  ))}
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
