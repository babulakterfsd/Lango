import { Button } from "react-bootstrap";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

//Home Component
const Home = (props) => {
  const { services } = props;

  return (
    <div id="Home">
      {/* Hero Part */}
      <div id="Hero">
        <Container>
          <Row className="mt-lg-5">
            <div className="col-12 col-md-6 banner-info-container mt-lg-5">
              <h1 className="text-secondary">
                Learn Languages. Build Yourself.Get Hired
              </h1>
              <p className="text-secondary">
                The study of foreign languages teaches and encourages respect
                for other peoples: it fosters an understanding of the
                interrelation of language and human nature.Discover how
                educational language platforms, such as Dexway, can help you.
              </p>
              <Link to="/services" className="text-decoration-none">
                <Button className="btn btn-success text-white fw-bold py-2 px-4">
                  Our Services
                </Button>
              </Link>
            </div>
            <div className="col-12 col-md-6 banner-img-container">
              <img
                src="https://raw.githubusercontent.com/babulakterfsd/imgsrc/main/chero.png"
                alt="hero"
                className="img-fluid"
              />
            </div>
          </Row>
        </Container>
      </div>

      {/* Home Services Part */}
      <div id="Services-home" className="text-secondary mt-5 pt-5">
        <Container>
          <Row>
            <div className="col-12 col-md-10 mx-auto">
              <h2 className="text-center">Our Services</h2>
              <p className="text-center">
                We offer the full spectrum of services to help organizations
                work better. Everything from creating standards of excellence to
                training your.As a full service agency, our work covers
                everything from market research
              </p>
            </div>
          </Row>
          <Row>
            <div className="col-12">
              <div className=" mt-2 row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {services.slice(0, 4).map((service) => (
                  <Service key={service.id} service={service}></Service>
                ))}
              </div>
            </div>
          </Row>
        </Container>
      </div>

      {/* Review Part */}
      <div id="review">
        <Container className="my-5">
          <Row>
            <div className="col-12 my-5 d-lg-flex flex-wrap justify-content-around text-secondary">
              <h3 className="text-center p-3 ">
                {" "}
                <i className="fas fa-user-graduate  text-success"></i> 17000+
                Students
              </h3>
              <h3 className="text-center  p-3 ">
                {" "}
                <i className="fab fa-leanpub  text-success"></i> 9 Courses
              </h3>
              <h3 className="text-center  p-3 ">
                <i className="fas fa-chalkboard-teacher text-success"></i> 120
                Instructors
              </h3>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
