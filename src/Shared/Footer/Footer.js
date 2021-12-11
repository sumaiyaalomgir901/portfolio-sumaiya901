import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--text-color)",
        color: "var(--primary-color)",
        padding: "20px 0px",
      }}
    >
      <Container>
        <Row className="d-flex align-items-center g-4">
          <Col sm={8} md={6} lg={8} className="text-start">
            <div className="d-flex align-items-center mb-3">
              <PhoneIcon style={{ marginRight: "15px" }} />
              <div>
                <p
                  style={{
                    fontWeight: "500",
                    margin: "0px",
                  }}
                >
                  +880 1955779012
                </p>
              </div>
            </div>
            {/* ================================ */}
            <div className="d-flex align-items-center mb-3">
              <EmailIcon style={{ marginRight: "15px" }} />
              <div>
                <p
                  style={{
                    fontWeight: "500",
                    margin: "0px",
                  }}
                >
                  sumaiyaalomgir901@gmail.com
                </p>
              </div>
            </div>
            {/* ================================ */}
            <div className="d-flex align-items-center">
              <HomeIcon style={{ marginRight: "15px" }} />
              <div>
                <p
                  style={{
                    fontWeight: "500",
                    margin: "0px",
                  }}
                >
                  Uttara 10, Dhaka, Bangladesh
                </p>
              </div>
            </div>
            {/* ================================ */}
          </Col>
          <Col className="d-flex" sm={6} md={6} lg={4}>
            <p className="mb-0 me-3">Social Link </p>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/Alomgirsumaiya"
              >
                <FacebookIcon
                  style={{
                    color: "var(--primary-color)",
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                  }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Alomgirsumaiya"
              >
                <TwitterIcon
                  style={{
                    color: "var(--primary-color)",
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                  }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alomgirsumaiya/"
              >
                <LinkedInIcon
                  style={{
                    color: "var(--primary-color)",
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                  }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/hanansumaiya"
              >
                <GitHubIcon
                  style={{
                    color: "var(--primary-color)",
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          {" "}
          <p>All right || Sumaiya Alomgir || 2021</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
