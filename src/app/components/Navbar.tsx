import React from "react";

import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
                  <FontAwesomeIcon icon={faWhatsapp} width={25} height={25} />
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
                  <FontAwesomeIcon icon={faMailBulk} width={25} height={25} />
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
                  <FontAwesomeIcon icon={faInstagram} width={25} height={25} />
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
              src={'/images/logo.png'}
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
              <Nav.Link href="/loja">Loja</Nav.Link>
              <NavDropdown title="Curriculum" id="basic-nav-dropdown">
              <NavDropdown.Item target='_blank' href="https://firebasestorage.googleapis.com/v0/b/rrprojects-7fa25.appspot.com/o/pessoal%2Fcurriculo.pdf?alt=media&token=19ef3571-d8c8-4ada-a0bb-87ccb1a534c4">English</NavDropdown.Item>
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
