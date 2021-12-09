import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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
        <Row>
          <Col>
            <Card style={{}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  target="_blank"
                  href="https://github.com/hanansumaiya/food-spicy"
                  rel="noreferrer"
                >
                  <button className="portfolio-btn mt-4 me-2 ">
                    View Details
                  </button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectBody;
