import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import axios from "axios";

import { Container as MuiContainer } from "@mui/system";

import Footer from "../../components/Footer";
import RNavbar from "../../components/Navbar";

import AllProducts from "./components/AllProducts";
import BreadCrumb from "./components/BreadCrumb";
import ProductTabs from "./components/ProductTabs";
import { toast, ToastContainer } from "react-toastify";

const Store = () => {
  const [showModalInfo, setShowModalInfo] = useState(false);

  const [showModalQR, setShowModalQR] = useState(false);
  const [paymentData, setPaymentData] = useState();

  const [productInfo, setProductInfo] = useState(null);

  const [email, setEmail] = useState("");

  const handleCloseModal = () => setShowModalInfo(false);

  const handleCloseModalQR = () => setShowModalQR(false);

  const handleOpenModal = (product) => {
    setProductInfo(product);
    setShowModalInfo(true);
    axios.get("https://api.devluar.com/");
  };

  const preceedPayment = () => {
    if (email === "" || !email.includes("@"))
      return alert("Insira um e-mail válido");
    setShowModalInfo(false);

    toast.success("Gerando seu código QR, aguarde...", {
      toastId: "two",
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    axios
      .post("https://api.devluar.com/payment/qrcode", {
        email: email,
        prodId: productInfo.key,
      })
      .then((r) => {
        console.log(r.data);

        setPaymentData(r.data);
        setShowModalQR(true);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Ocorreu um problema no sistema, tente mais tarde.", {
          toastId: "two",
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  useEffect(() => {
    axios.get("https://api.devluar.com/");
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <RNavbar />
      <div className="section">
        <MuiContainer>
          <BreadCrumb />
        </MuiContainer>
      </div>
      <main>
        <Container style={{ padding: 50 }}>
          <h1 style={{ fontSize: "2rem" }}>
            Está procurando algum arquivo editável ou software?
          </h1>
          <p>
            No meu site tem alguns, por um precinho super baixo, dá uma olhada!
          </p>
        </Container>
        <div className="section dark">
          <ProductTabs onOpenModal={handleOpenModal} />
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
          <AllProducts onOpenModal={handleOpenModal} />
        </div>
      </main>
      <Footer />
      <Modal show={showModalInfo} onHide={handleCloseModal}>
        {productInfo && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{productInfo.data.nome}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{ color: "#000000" }}>
                Descrição: {productInfo.data.desc}
              </p>
              <p style={{ color: "#000000" }}>
                Preço: R${productInfo.data.valor}
              </p>
              <b style={{ color: "#000000" }}>
                Informe seu e-mail para envio do produto:
              </b>
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="seunome@gmail.com"
                  aria-label="E-mail"
                  aria-describedby="basic-addon1"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
                <small>
                  Após inserir seu e-mail e confirmar, um código QR irá aparecer
                  juntamente com um pix copia e cola, quando seu pagamento for
                  efetuado o seu produto será enviado no e-mail fornecido.
                </small>
              </InputGroup>
              <Button
                variant="success"
                style={{ width: "100%" }}
                onClick={() => preceedPayment()}
              >
                Prosseguir para pagamento
              </Button>
            </Modal.Body>
          </>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalQR} onHide={handleCloseModalQR}>
        {productInfo && paymentData && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Pagamento do Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{ color: "#000000" }}>
                <b>Produto:</b> {productInfo.data.nome}
              </p>
              <img
                src={`data:image/png;base64,${paymentData.encodedImage}`}
                style={{ width: "100%" }}
              />
              <div>
                <label>PIX Copia e cola</label>
                <textarea
                  rows="4"
                  value={paymentData.payload}
                  readOnly
                  style={{ width: "100%" }}
                  onClick={() =>
                    navigator.clipboard.writeText(paymentData.payload)
                  }
                />
              </div>
              <small>
                Ao efetuar o pagamento, aguarde entre 1 e 2 minutos para que
                você receba sua confirmação, comprovante e o produto por e-mail.
              </small>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Store;
