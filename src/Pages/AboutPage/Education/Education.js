import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Education.css";

const Education = () => {
  return (
    <>
      <Container style={{ marginBottom: "50px" }} className="my-5 pt-5">
        <h1
          style={{
            color: "var(--primary-color)",
            fontFamily: "poppins",
          }}
        >
          Education
        </h1>
        <Row className="mt-4 g-4">
          <Col md={4} lg={4}>
            <Card
              style={{
                textAlign: "left",
                fontFamily: "poppins",
                border: "0px",
              }}
            >
              <Card.Body>
                <Card.Title>Daffodil International University</Card.Title>
                <Card.Text className="mb-0">2016 - 2020</Card.Text>
                <Card.Text className="mb-0">
                  BSc in Computer Science & Engineering
                </Card.Text>
                <Card.Text>CGPA 3.44 OutOf 4.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4}>
            <Card
              style={{
                textAlign: "left",
                fontFamily: "poppins",
                border: "0px",
              }}
            >
              <Card.Body>
                <Card.Title>Trust College</Card.Title>
                <Card.Text className="mb-0">2013 - 2015</Card.Text>
                <Card.Text className="mb-0">Higher Secondary School</Card.Text>
                <Card.Text>GPA 4.50 OutOf 5.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4}>
            <Card
              style={{
                textAlign: "left",
                fontFamily: "poppins",
                border: "0px",
              }}
            >
              <Card.Body>
                <Card.Title>Kamarpara School & College</Card.Title>
                <Card.Text className="mb-0">2003 - 2013</Card.Text>
                <Card.Text className="mb-0">Secondary School </Card.Text>
                <Card.Text>GPA 4.44 OutOf 5.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Education;
