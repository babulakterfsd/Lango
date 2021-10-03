import { Button } from "react-bootstrap";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-12 col-md-10 col-lg-8 mx-auto text-center  error-container">
            <h1 className="text-danger">404! Page Not Found !!</h1>
            <Link to="/Home">
              <Button className="btn-success mt-2 text-white">
                Go Back to Home
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
