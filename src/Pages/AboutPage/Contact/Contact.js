import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3jy6199",
        "template_o0ewc8b",
        e.target,
        "user_wMgsQmWIHwBiEaM8FJKj9"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.target.value = "";
  };
  return (
    <>
      <div className="contact">
        <Container>
          <h1
            style={{
              color: "white",
              marginBottom: "30px",
              fontFamily: "poppins",
            }}
          >
            Get in Touch
          </h1>
          <Row className="d-flex justify-content-center">
            <Col md={8} lg={6}>
              <form
                onSubmit={sendEmail}
                id="contact-form"
                className="form mx-auto"
              >
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <textarea
                  className="form-control mb-3"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
                <input
                  className="contact-btn w-50 py-2 rounded border-0"
                  type="submit"
                  value="Send"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
