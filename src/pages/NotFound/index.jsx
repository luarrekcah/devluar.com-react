import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "react-bootstrap";
import { toast } from "react-toastify";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NotFound = () => {
  const notify = () =>
    toast("🚀 Broo! Você achou uma página que não existe", {
      toastId: "first",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  notify();

  return (
    <div className="App">
      <Navbar />
      <main>
        <header
          className="App-header"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.77)" }}
        >
          <Container id="notfound">
            <h1>Ooops! Tem algo faltando aqui.</h1>
            <p>Não pudemos encontrar a página que buscas.</p>
            Retorne para a <a href='/'>Página Inicial</a>.
          </Container>
        </header>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
