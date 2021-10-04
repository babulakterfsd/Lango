import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

//Contact Us Component
const Contact = () => {
  return (
    <Container>
      <Row>
        <div className="col-12 col-md-10 mx-auto text-secondary mt-5">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">
            We offer the full spectrum of services to help organizations work
            better. Everything from creating standards of excellence to training
            your.As a full service agency, our work covers everything from
            market research
          </p>
        </div>
      </Row>
      <Row>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="form-container py-5 mb-md-5">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>New York</option>
                    <option>Miami</option>
                    <option>Boston</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Type Your Message Here..."
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 text-success fw-semi-bold"
                id="formGridCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Notify Best Offeres via Email"
                />
              </Form.Group>

              <Button
                onClick={(event) => {
                  event.preventDefault();
                }}
                variant="success"
                type="submit"
                className="py-2 px-4"
              >
                Send Your Message
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
