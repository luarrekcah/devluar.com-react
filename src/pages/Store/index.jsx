import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import RNavbar from "../../components/Navbar";
import BreadCrumb from "./components/BreadCrumb";
import ProductTabs from "./components/ProductTabs";

const Store = () => {
  return (
    <div className="App">
      <RNavbar />
      <div className="section" style={{marginLeft: 20}}>
        <BreadCrumb />
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
      </main>
      <Footer />
    </div>
  );
};

export default Store;
