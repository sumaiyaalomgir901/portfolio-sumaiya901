import React from "react";
import "./HomeBanner.css";
import sumaiya from "../../../images/sumaiya.png";
import { Col, Row } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <div className="home">
      <Row>
        <Col xs={6} md={6} lg={6}>
          <img src={sumaiya} alt="" />
        </Col>
        <Col className="border" xs={6} md={6} lg={6}>
          <div className="right-home">
            <h1>
              I'm{" "}
              <span style={{ color: "var(--primary-color)" }}>
                Sumaiya Alomgir Hanan
              </span>
            </h1>
            <p>
              I am a Full-stack Developer (MERN). I am an expert in React,
              MongoDB, NodeJS, ExpressJS, Firebase, Website design, and
              development, Material UI, React Bootstrap.
            </p>
            <button className="portfolio-btn">Read About Me</button>
          </div>
        </Col>
      </Row>

      {/* <div className="left-home"></div>
       */}
    </div>
  );
};

export default HomeBanner;
