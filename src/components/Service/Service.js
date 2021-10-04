import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, img, certification, duration } = service;

  return (
    <Col>
      <Card>
        <img
          src={img}
          alt="carm pic"
          className="img-fluid"
          style={{ height: "250px", width: "100%" }}
        />
        <hr />
        <Card.Body>
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
        <Card.Footer>
          <small className="text-muted">Last updated 23 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
