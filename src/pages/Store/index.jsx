import { Typography } from "@mui/material";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { Container as MuiContainer } from "@mui/system";

import Footer from "../../components/Footer";
import RNavbar from "../../components/Navbar";

import AllProducts from "./components/AllProducts";
import BreadCrumb from "./components/BreadCrumb";
import ProductTabs from "./components/ProductTabs";

const Store = () => {
  return (
    <div className="App">
      <RNavbar />
      <div className="section">
        <MuiContainer>
          <BreadCrumb />
        </MuiContainer>
      </div>
      <main>
        <Container style={{ padding: 50 }}>
          <h1 style={{ fontSize: "2rem" }}>
            Está procurando algum arquivo editável?
          </h1>
          <p>
            No meu site tem alguns, por um precinho super baixo, dá uma olhada!
          </p>
        </Container>
        <div className="section dark">
          <ProductTabs />
        </div>
        <div className="section">
          <Container
            style={{ padding: 50, borderWidth: 10, borderColor: "#fff" }}
          >
            <Row>
              <Col>
                <Typography variant="h6">Não achou o que procurava?</Typography>
                <Typography variant="p">
                  Solicite seu orçamento no WhatsApp e tenha seu arquivo em até
                  2 horas.
                </Typography>
              </Col>
              <Col>
                <Button variant="danger" style={{ width: "100%" }}>
                  Whatsapp
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section dark">
          <h2>Todos os produtos</h2>
          <AllProducts />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
