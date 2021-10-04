import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = ({ services }) => {
  //Service Component
  return (
    <Container>
      <Row>
        <div className="col-12 col-md-10 mx-auto text-secondary mt-5">
          <h2 className="text-center">Our Services</h2>
          <p className="text-center">
            We offer the full spectrum of services to help organizations work
            better. Everything from creating standards of excellence to training
            your.As a full service agency, our work covers everything from
            market research
          </p>
        </div>
      </Row>
      <Row>
        <div className="services-container row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 pb-5">
          {services.map((service, index) => (
            <Service key={index} service={service}></Service>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default Services;
