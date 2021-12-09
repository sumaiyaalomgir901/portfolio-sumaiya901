import * as React from "react";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
// import SvgIcon from "@mui/material/SvgIcon";
import "./Navigation.css";

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

const Navigation = () => {
  return (
    <>
      <Navbar className="navbar-light pt-4" expand={false}>
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link
                  as={Link}
                  to="/home"
                  style={{ color: "var(--text-color)" }}
                >
                  <HomeIcon
                    style={{
                      marginRight: "10px",
                      color: "var(--primary-color)",
                    }}
                  />
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  style={{ color: "var(--text-color)" }}
                >
                  <AccountCircleIcon
                    style={{
                      marginRight: "10px",
                      color: "var(--primary-color)",
                    }}
                  />
                  About Me
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/projects"
                  style={{ color: "var(--text-color)" }}
                >
                  <AutoAwesomeMotionIcon
                    style={{
                      marginRight: "10px",
                      color: "var(--primary-color)",
                    }}
                  />
                  Projects
                </Nav.Link>
                <button className="mt-3 portfolio-btn">Contact Me</button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
{
  /* <HomeIcon /> */
}
export default Navigation;
