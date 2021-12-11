import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <Container>
        <h1
          style={{
            color: "var(--primary-color)",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          Skills
        </h1>
        <Row className="py-5  ">
          <Col md={12} lg={6}>
            <div className="skill-left">
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
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="skill-right">
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
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5>ExpressJS</h5>
                  <h5>60%</h5>
                </div>
                <ProgressBar className="progress" now={75} />
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h5>NodeJS</h5>
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
