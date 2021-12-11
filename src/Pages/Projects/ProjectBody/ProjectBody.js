import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./ProjectBody.css";
import doctor from "../../../images/projects/doctor.png";
import football from "../../../images/projects/football.png";
import bike from "../../../images/projects/bikerepsol.png";
import codrop from "../../../images/projects/codrop.png";
import dayrise from "../../../images/projects/dayrise.png";
import doctor1 from "../../../images/projects/doctor1.png";
import foodspicy from "../../../images/projects/foodspicy.png";
import kungfu from "../../../images/projects/kungfu.png";
import leader from "../../../images/projects/leader.png";
import portfolio1 from "../../../images/projects/portfolio1.png";
import portfolio2 from "../../../images/projects/portfolio2.png";
import shoeside from "../../../images/projects/shoeside.png";
import teacher1 from "../../../images/projects/teacher1.png";
import teacher2 from "../../../images/projects/teacher2.png";
import telephone from "../../../images/projects/telephone.png";
import temperature from "../../../images/projects/temperature.png";
import book from "../../../images/projects/book.png";

const ProjectBody = () => {
  return (
    <>
      <Container>
        <h1
          className="projectbody-h1"
          style={{
            color: "var(--text-color)",
            marginBottom: "15px",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          My <span style={{ color: "var(--primary-color)" }}>Projects</span>
        </h1>
        {/* =================================================================== */}
        <Row className="g-4 my-4">
          {/* ======  1  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img className="image-card" variant="top" src={doctor} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  The Doctor's Portal
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  React . MongoDB . NodeJS . ExpressJS . Firebase .React
                  Bootstrap . Material UI
                </Card.Text>
                <a
                  target="_blank"
                  href="https://the-doctors-portal-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  2  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={football} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Copa America 2022
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Mobile
                  responsive . Grid . Flex
                </Card.Text>
                <a
                  target="_blank"
                  href="https://responsive-football-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  3  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={bike} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Bike Repsol
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Mobile
                  responsive . Grid . Flex
                </Card.Text>
                <a
                  target="_blank"
                  href="https://bike-bootstrap-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  4  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={codrop} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Codrop
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Mobile
                  responsive . Grid . Flex
                </Card.Text>
                <a
                  target="_blank"
                  href="https://codrop-bootstrap-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  5  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={dayrise} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Dayrise
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Mobile
                  responsive . Grid . Flex
                </Card.Text>
                <a
                  target="_blank"
                  href="https://dayrise-bootstrap-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  6  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={telephone} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  LUCID
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Mobile
                  responsive . Grid . Flex
                </Card.Text>
                <a
                  target="_blank"
                  href="https://hanansumaiya.github.io/lucid/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  7  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={temperature} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Tempareture
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . JavaScript . API . Weather API
                </Card.Text>
                <a
                  target="_blank"
                  href="https://temperature-api-json-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  8  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={book} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Book Archive
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . JavaScript . API . Book search API
                </Card.Text>
                <a
                  target="_blank"
                  href="https://book-archive-api-json-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  9  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={teacher2} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Our Teachers Team
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Document
                  Object Model
                </Card.Text>
                <a
                  target="_blank"
                  href="https://teachers-team-react-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  10  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={teacher1} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Turag Coaching Center
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  React . React Router . Bootstrap . Responsive website . Grid .
                  API . JavaScript
                </Card.Text>
                <a
                  target="_blank"
                  href="https://turag-coaching-center-react.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  11  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={shoeside} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Shoe Sides
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Grid .
                </Card.Text>
                <a
                  target="_blank"
                  href="https://shoe-sides-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  12  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={doctor1} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Dental Plus
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Grid . Medical
                  website
                </Card.Text>
                <a
                  target="_blank"
                  href="https://dental-bootstrap-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  13  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={foodspicy} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  The Food Spicy
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3
                </Card.Text>
                <a
                  target="_blank"
                  href="https://foodspicy-bootstrap-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  14  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={portfolio1} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Portfolio
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 .
                </Card.Text>
                <a
                  target="_blank"
                  href="https://portfolio-black-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  15  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={portfolio2} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Portfolio
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3
                </Card.Text>
                <a
                  target="_blank"
                  href="https://portfolio-html-css-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  16  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={kungfu} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  KungFu
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . Grid .
                </Card.Text>
                <a
                  target="_blank"
                  href="https://kungfu-bootstrap-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* ======  17  ======= */}
          <Col sm={6} md={6} lg={4}>
            <Card
              className="text-start rounded shadow border-0 pb-2"
              style={{ fontFamily: "poppins" }}
            >
              <Card.Img variant="top" src={leader} />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  Leader Board
                </Card.Title>
                <Card.Text style={{ fontWeight: "500", marginBottom: "30px" }}>
                  HTML5 . CSS3 . Bootstrap . Responsive website . PSD,Figma
                  files to Responsive
                </Card.Text>
                <a
                  target="_blank"
                  href="https://leader-board-somo.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn w-100">Full view</button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* =================================================================== */}
      </Container>
    </>
  );
};

export default ProjectBody;
