import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Service = ({ service }) => {
  //destructuring single properties
  const { name, img, certification, duration, price } = service;

  //Single Service Component
  return (
    <Col>
      <Card>
        <img
          src={img}
          alt="carm pic"
          className="img-fluid"
          style={{ height: "200px", width: "100%" }}
        />
        <hr />
        <Card.Body className="text-secondary">
          <Card.Title>
            Course Name: <span className="text-success"> {name}</span>
          </Card.Title>
          <Card.Text>
            Course Duration:{" "}
            <span className="text-success fw-bold"> {duration}</span>
          </Card.Text>
          <Card.Text>
            Certification:{" "}
            <span className="text-success fw-bold"> {certification}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-wrap justify-content-between">
          <Button className="btn-success fw-semi-bold">Enroll Now</Button>
          <h4 className="fw-bolder text-secondary">${price}</h4>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
