import React from "react";
import "./HomeBanner.css";
import sumaiya from "../../../images/sumaiya.png";
import { Col, Row } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <Row className="home">
      <Col xs={12} md={6} lg={6} className="ps-0">
        <img className="home-img" src={sumaiya} alt="" />
      </Col>
      <Col className=" p-0" xs={12} md={6} lg={6}>
        <div className="right-home ">
          <h1
            style={{
              margin: "0px",
            }}
          >
            I'm
          </h1>
          <h1
            style={{
              color: "var(--primary-color)",
              marginBottom: "1%",
            }}
          >
            Sumaiya Alomgir
          </h1>
          <TypewriterComponent
            classNameName="typing"
            onInit={(typewriter) =>
              typewriter
                .typeString(`I am Expert in <span>React</span>`)
                .pauseFor(1000)
                .deleteChars(5)
                .typeString(`<span>Node js</span>`)
                .pauseFor(1000)
                .deleteChars(7)
                .typeString(`<span>Express js</span>`)
                .pauseFor(1000)
                .deleteChars(10)
                .typeString(`<span>MongoDB</span>`)
                .pauseFor(1000)
                .deleteChars(7)
                .typeString(`<span>Material UI</span>`)
                .pauseFor(1000)
                .deleteChars(11)
                .typeString(`<span>React Bootstrap</span>`)
                .pauseFor(1000)
                .deleteChars(15)
                .typeString(`<span>Tailwind</span>`)
                .pauseFor(1000)
                .deleteChars(8)
                .typeString(`<span>Firebase</span>`)
                .pauseFor(1000)
                .deleteChars(9)
                .typeString(`<span>MERN stack web development</span>`)
                .pauseFor(1000)
                .deleteChars(26)
                .typeString(`<span>Full stack web development </span>`)
                .pauseFor(2000)
                .start()
            }
          />

          <Link to="/about">
            <button className="portfolio-btn mt-4 ">
              More About Me{" "}
              <ArrowCircleRightIcon style={{ fontSize: "20px" }} />
            </button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default HomeBanner;
