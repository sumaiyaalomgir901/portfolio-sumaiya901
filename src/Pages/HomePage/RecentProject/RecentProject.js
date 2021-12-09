import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RecentProject.css";
import doctorportal from "../../../images/doctorportal1.png";
import bike from "../../../images/bike.png";
import kungfu from "../../../images/kungfu.png";
import food from "../../../images/food.png";

const RecentProject = () => {
  return (
    <>
      <Container>
        <h1
          style={{
            color: "var(--primary-color)",
            fontFamily: "poppins",
            marginTop: "70px",
          }}
        >
          Recent Works
        </h1>
        {/* =====================1==================== */}
        <Row className="my-5 align-items-center g-4 ">
          <Col
            md={6}
            lg={6}
            className="text-start"
            style={{ fontFamily: "poppins" }}
          >
            <h2 className="mb-4">About this project</h2>

            <p>
              <span
                style={{
                  fontWeight: "500",
                  color: "var(--primary-color)",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                The Doctor's Portal
              </span>{" "}
              appointment website by REACT. I have used MongoDB, NodeJS,
              ExpressJS for backend. For authentication i used Firebase. This
              website 100% responsive. React bootstrap used for mobile
              responsive and create beautifull outlook.
            </p>
            <p>
              This website has two-part. One for normal users who can register
              or log in. After login, they can take appointment. Another is the
              admin part. One admin can make another admin by Gmail. Only the
              admin has the power to delete or update appointments.
            </p>
            <a
              target="_blank"
              href="https://the-doctors-portal-somo.netlify.app/"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">Full view</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/hanansumaiya/the-doctors-portal-server"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">
                Github Server
              </button>
            </a>
            <a
              target="_blank"
              href="https://github.com/hanansumaiya/the-doctors-portal-client"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">
                Github Client
              </button>
            </a>
          </Col>
          <Col md={6} lg={6}>
            <div>
              <img className="w-100" src={doctorportal} alt="" />
            </div>
          </Col>
        </Row>
        {/* ==================2======================= */}
        <Row className="my-5 align-items-center g-4 ">
          <Col md={6} lg={6}>
            <div>
              <img className="w-100" src={bike} alt="" />
            </div>
          </Col>
          <Col
            md={6}
            lg={6}
            className="text-start"
            style={{ fontFamily: "poppins" }}
          >
            <h2 className="mb-4">About this project</h2>

            <p>
              <span
                style={{
                  fontWeight: "500",
                  color: "var(--primary-color)",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                BIKE REPSOL ,
              </span>{" "}
              in this beautifull bike repsol website making with HTML5, CSS3 and
              Bootstrap. It is 100% mobile responsive.
            </p>
            <p>This website has only one panel. Cross browser supported</p>
            <a
              target="_blank"
              href="https://bike-bootstrap-somo.netlify.app/"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">Full view</button>
            </a>

            <a
              target="_blank"
              href="https://github.com/hanansumaiya/honda-bootstrap"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">
                Github Client
              </button>
            </a>
          </Col>
        </Row>
        {/* ====================3===================== */}
        <Row className="my-5 align-items-center g-4">
          <Col
            md={6}
            lg={6}
            className="text-start"
            style={{ fontFamily: "poppins" }}
          >
            <h2 className="mb-4">About this project</h2>

            <p>
              Creating{" "}
              <span
                style={{
                  fontWeight: "500",
                  color: "var(--primary-color)",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                KUNGFU
              </span>{" "}
              website i have used HTML , CSS & Bootstrap . This is cross browser
              supported. 100% mobile, iPad, Laptop device responsive.
            </p>

            <a
              target="_blank"
              href="https://kungfu-bootstrap-somo.netlify.app/"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">Full view</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/hanansumaiya/kungfu"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">
                Github Client
              </button>
            </a>
          </Col>
          <Col md={6} lg={6}>
            <div>
              <img className="w-100" src={kungfu} alt="" />
            </div>
          </Col>
        </Row>
        {/* ====================4==================== */}
        <Row className="my-5 align-items-center g-4">
          <Col md={6} lg={6}>
            <div>
              <img className="w-100" src={food} alt="" />
            </div>
          </Col>
          <Col
            md={6}
            lg={6}
            className="text-start"
            style={{ fontFamily: "poppins" }}
          >
            <h2 className="mb-4">About this project</h2>

            <p>
              <span
                style={{
                  fontWeight: "500",
                  color: "var(--primary-color)",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                Food Spicy
              </span>{" "}
              . Simple beautifull website. Only used HTML and CSS. I have used
              css flex property.
            </p>
            <p>
              It is not a responsive website. But cross browser supported. I can
              make it responsive as requirement .
            </p>

            <a
              target="_blank"
              href="https://foodspicy-bootstrap-somo.netlify.app/"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">Full view</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/hanansumaiya/food-spicy"
              rel="noreferrer"
            >
              <button className="portfolio-btn mt-4 me-2 ">
                Github Client
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecentProject;
