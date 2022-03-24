import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FaOpencart } from 'react-icons/fa';

const Header = () => {
  return (
    <nav>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">The Meals</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Button>
                <FaOpencart></FaOpencart>
                <sup>0</sup>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
