import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <Container className="border">
        <h1
          style={{
            color: "var(--primary-color)",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          Skills
        </h1>
        <Row className="py-5 d-flex align-items-center g-4">
          <Col md={6} lg={6}>
            <div className="skill-left">
              <h2
                style={{
                  color: "var(--text-color)",
                  fontFamily: "poppins",
                  marginBottom: "20px",
                }}
              >
                Experiences and Skills
              </h2>
              <p style={{ color: "var(--text-color)", fontWeight: "500" }}>
                I am a Full-stack Web Developer. I am comfortable with both
                front-end back-end. I am an expert in React, MongoDB, NodeJS,
                ExpressJS, Firebase, Website design and development, Material
                UI, React Bootstrap.
              </p>
              <p style={{ color: "var(--text-color)", fontWeight: "500" }}>
                I have completed more than 15 projects with responsive. And
                completed 3/4 full projects both backend and frontend.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6}>
            <div className="skill-right">
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>HTML5</h5>
                  <h5>90%</h5>
                </div>
                <ProgressBar className="progress" now={90} />
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>CSS3</h5>
                  <h5>90%</h5>
                </div>
                <ProgressBar className="progress" now={90} />
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>Bootstrap4</h5>
                  <h5>90%</h5>
                </div>
                <ProgressBar className="progress" now={90} />
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>Tailwind</h5>
                  <h5>90%</h5>
                </div>
                <ProgressBar className="progress" now={90} />
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>JavaScript</h5>
                  <h5>65%</h5>
                </div>
                <ProgressBar className="progress" now={65} />
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>React</h5>
                  <h5>70%</h5>
                </div>
                <ProgressBar className="progress" now={75} />
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>Firebase</h5>
                  <h5>70%</h5>
                </div>
                <ProgressBar className="progress" now={75} />
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>MongoDB</h5>
                  <h5>60%</h5>
                </div>
                <ProgressBar className="progress" now={75} />
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h5>ExpressJS</h5>
                  <h5>60%</h5>
                </div>
                <ProgressBar className="progress" now={75} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skill;
