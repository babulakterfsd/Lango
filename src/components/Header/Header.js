import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

//Generating Navigation Bar
const Header = () => {
  return (
    <div>
      <Navbar className="py-3 bg-success" expand="md">
        <Container fluid>
          <Navbar.Brand className="text-secondary fw-bolder">
            <Link
              to="/Home"
              className="text-white text-decoration-none fw-bolder ms-lg-5"
            >
              <i className="fas fa-book me-1 text-warning"></i>
              Lango
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-md-0 me-lg-3 fw-semi-bold">
              <Link to="/Home" className="text-decoration-none mx-2">
                <span className="text-white">Home</span>
              </Link>
              <Link to="/About" className="text-decoration-none  mx-2">
                <span className="text-white">About</span>
              </Link>
              <Link to="/Services" className="text-decoration-none mx-2">
                <span className="text-white">Services</span>
              </Link>
              <Link to="/Offers" className="text-decoration-none mx-2">
                <span className="text-white">Offers</span>
              </Link>
              <Link to="/Contact" className="text-decoration-none mx-2">
                <span className="text-white">Contact</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
