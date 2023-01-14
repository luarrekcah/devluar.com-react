import React from "react";
import {Container} from "react-bootstrap";
import RNavbar from "../../components/Navbar";

const Store = () => {
  return (
    <div className="App">
      <RNavbar />
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
         
        </div>
      </main>
    </div>
  );
};

export default Store;
