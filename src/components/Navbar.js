import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";


const NavbarPage = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-bgcolor">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Agriculture Input</Nav.Link>
              <Nav.Link href="#home">Agriculture Ouput</Nav.Link>
              <Nav.Link href="#link">Agriculture Service</Nav.Link>
              <Nav.Link href="#home">Farm Equipment rental</Nav.Link>
              <Nav.Link href="#link">Sell Form Produce</Nav.Link>
              <Nav.Link href="#home">Buy Form Produce </Nav.Link>
              <Nav.Link href="#link">Resource and Insight</Nav.Link>
              <Nav.Link href="#link">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarPage;
