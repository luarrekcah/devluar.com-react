import React from "react";

import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.png";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const RNavbar = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#090c10" }}>
        <Container>
          <div
            style={{
              display: "flex",
              color: "#fff",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: 14, marginTop: "1rem" }}>
                <b style={{ color: "#FF0000" }}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </b>{" "}
                <b>Celular</b>{" "}
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="https://wa.me/+556892402096"
                >
                  68 99240-2096
                </a>
              </p>
            </div>
            <div>
              <p style={{ fontSize: 14, marginTop: "1rem" }}>
                <b style={{ color: "#FF0000" }}>
                  <FontAwesomeIcon icon={faMailBulk} />
                </b>{" "}
                <b>E-mail</b>{" "}
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="mailto:contato@devluar.com"
                >
                  contato@devluar.com
                </a>
              </p>
            </div>
            <div>
              <p style={{ fontSize: 14, marginTop: "1rem" }}>
                <b>Mais sobre mim</b>{" "}
                <a
                  style={{ textDecoration: "none", color: "#FF0000" }}
                  href="https://instagram.com/luarrekcah"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
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
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/#">Início</Nav.Link>
              <Nav.Link href="/#sobre">Sobre</Nav.Link>
              <Nav.Link href="/#projetos">Projetos</Nav.Link>
              <Nav.Link href="/#servicos">Serviços</Nav.Link>
              <Nav.Link href="https://www.elo7.com.br/devluar">Loja</Nav.Link>
              <NavDropdown title="Curriculum" id="basic-nav-dropdown">
              <NavDropdown.Item href="/curriculo.pdf">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Português (não disp)</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="https://wa.me/+556892402096">
                <Button
                  variant="outline-danger"
                  style={{ height: 30, alignItems: "center", display: "flex" }}
                >
                  Contato
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default RNavbar;
