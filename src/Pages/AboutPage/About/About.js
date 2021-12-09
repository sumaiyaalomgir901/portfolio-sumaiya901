import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import aboutsumaiya from "../../../images/about.png";
import resume from "../../../images/sumaiya-resume.pdf";
import "./About.css";
import Navigation from "../../../Shared/Navigation/Navigation";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
const About = () => {
  return (
    <>
      <Navigation></Navigation>
      <Container className="mt-4">
        <Row
          className="d-flex align-items-center justify-content-md-center justify-content-sm-center g-5 pb-5"
          style={{ marginRight: "0px", marginLeft: "0px" }}
        >
          <Col sm={12} md={12} lg={8} className="text-start">
            <div className="about-left">
              <h1 style={{ color: "var(--text-color)", marginBottom: "15px" }}>
                Let's know about{" "}
                <span style={{ color: "var(--primary-color)" }}>Myself</span>
              </h1>
              <p style={{ color: "var(--text-color)", fontWeight: "500" }}>
                My name is Sumaiya Alomgir. I am from Dhaka, Bangladesh. I have
                completed my Higher Secondary at Trust College in 2015 and BSc
                in Computer Science and Engineering at Daffodil International
                University from 2016 to 2020.{" "}
              </p>
              <p style={{ color: "var(--text-color)", fontWeight: "500" }}>
                From my university life, I have started learning programming
                languages. And I attend take of programming contest. I know
                HTML, CSS, Bootstrap, Responsive website design with 3 years of
                experience. And also React, firebase, MongoDB, Node JS, Express
                JS with 1-year experience.
              </p>
              <a
                href={resume}
                download
                className="portfolio-btn text-decoration-none mt-4 d-inline-block"
              >
                Download Resume{" "}
                <ArrowCircleRightIcon style={{ fontSize: "20px" }} />{" "}
              </a>
            </div>
          </Col>
          <Col sm={8} md={8} lg={4} className="">
            <div className="about-right">
              <img src={aboutsumaiya} alt="About Sumaiya png" />
            </div>
          </Col>
        </Row>
      </Container>
      <Skill></Skill>
      <Education></Education>
      <Contact></Contact>
    </>
  );
};

export default About;
