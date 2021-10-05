import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//best running offers component
const Offers = () => {
  return (
    <Container>
      <Row>
        <div className="col-12 col-md-10 mx-auto">
          <div className="col-12 col-md-10 mx-auto text-secondary mt-5">
            <h2 className="text-center">Running Offers</h2>
            <p className="text-center">
              We offer the full spectrum of services to help organizations work
              better. Everything from creating standards of excellence to
              training your.As a full service agency, our work covers everything
              from market research
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <div className="col-12 col-md-10 mx-auto">
          <div className="offer-card d-flex justify-content-center my-5 py-5">
            <Card className="p-md-3">
              <Card.Body>
                <Card.Title className="text-success">
                  <span className="text-danger fw-bold">65%</span> for Discount
                  Covid-19 Survivors !
                </Card.Title>
                <div className="text-secondary">
                  Survivor Corps is one of the largest and fastest growing
                  grassroots movements connecting, supporting, educating,
                  motivating and mobilizing COVID-19 Survivors to.
                  <p className="text-success fw-semi-bold">
                    Use this promo : U25YCH
                  </p>
                </div>
                <Link to="/services" className="text-decoration-none">
                  <Button className="btn-success">Buy Our Services</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Offers;
