import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.png";

const RNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/#home">
          <img
            src={logo}
            width="37"
            height="30"
            className="d-inline-block align-top"
            alt="Raul Rodrigues Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#servicos">Serviços</Nav.Link>
            <Nav.Link href="/#projetos">Projetos</Nav.Link>
            <Nav.Link href="/#sobre">Sobre</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  href="https://www.elo7.com.br/devluar">
              Loja
            </Nav.Link>
            <Nav.Link  href="https://wa.me/+556892402096">
              <FontAwesomeIcon icon={faWhatsapp} /> Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RNavbar;
