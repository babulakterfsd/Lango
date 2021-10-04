import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

//About Us Component
const About = () => {
  return (
    <Container>
      <Row>
        <div className="col-12 col-md-10 mx-auto text-secondary mt-5">
          <h2 className="text-center">About Us</h2>
          <p className="text-center">
            We offer the full spectrum of services to help organizations work
            better. Everything from creating standards of excellence to training
            your.As a full service agency, our work covers everything from
            market research
          </p>
        </div>
      </Row>
      <Row className="d-flex justify-content-center">
        <div className="col-12 col-md-6 my-5 pb-md-5">
          <img
            src="https://raw.githubusercontent.com/babulakterfsd/imgsrc/main/about.png"
            alt="about"
            className="img-fluid about-img"
          />
        </div>
        <div className="col-12 col-md-6 my-5 pb-5 mt-md-5">
          <p className="text-secondary ms-md-3 mt-md-3">
            <span className="text-danger fw-bolder">Lango</span> for Business is
            the transformative skill development solution for empowering your
            teams with the high-impact skills that drive innovation,
            competitiveness, and growth.for Business is the transformative skill
            development solution for empowering your teams with the high-impact
            skills that drive innovation, competitiveness, and growth.
            competitiveness, and growth. competitiveness, and growth. for
            empowering your teams with the high-impact skills that drive
            innovation, competitiveness, and growth. competitiveness, and
            growth. competitiveness, and growth.
          </p>
          <Link to="/Services" className="text-decoration-none">
            <Button className="btn-success d-block mx-auto">
              Buy Our Services
            </Button>
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default About;
