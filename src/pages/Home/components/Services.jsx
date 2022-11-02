import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faRegistered, faPenToSquare, faFolder, faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="card-services">
            <div>
              <div className="icon-services">
                <h2>
                  <FontAwesomeIcon icon={faUser} />
                </h2>
              </div>
              <h3>CRIAÇÃO DE SITES</h3>
              <p>Criação de aplicações web, manutenção e outros</p>
            </div>
          </div>
          </Col>
          <Col>
          <div className="card-services">
            <div>
              <div className="icon-services">
                <h2>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </h2>
              </div>
              <h3>DESIGN GRÁFICO</h3>
              <p>Criação de artes vetoriais e bitmaps para divulgação, tais como artes de crachá, camisas, cartão visitas, fachadas e outros</p>
            </div>
          </div>
          </Col>
          <Col>
          <div className="card-services">
            <div>
              <div className="icon-services">
                <h2>
                  <FontAwesomeIcon icon={faAndroid} />
                </h2>
              </div>
              <h3>CRIAÇÃO DE APLICATIVOS</h3>
              <p>Desenvolvimento de aplicativos para a plataforma android e publicação na Play Store.</p>
            </div>
          </div>
          </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-services">
            <div>
              <div className="icon-services">
                <h2>
                  <FontAwesomeIcon icon={faRegistered} />
                </h2>
              </div>
              <h3>ASSESSORIA DE EMPRESAS</h3>
              <p>Faça sua empresa aparecer no Google e ganhar visibilidade.</p>
            </div>
          </div>
          </Col>
          <Col>
          <div className="card-services">
            <div>
              <div className="icon-services">
                <h2>
                  <FontAwesomeIcon icon={faFolder} />
                </h2>
              </div>
              <h3>PACOTES DE MÍDIA SOCIAL</h3>
              <p>Compra de seguidores, curtidas e visualizações em redes sociais.</p>
            </div>
          </div>
          </Col>
          <Col>
          <div className="card-services">
            <div>
              <div className="icon-services">
                <h2>
                  <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </h2>
              </div>
              <h3>E MUITO MAIS!</h3>
              <p>Entre em contato.</p>
            </div>
          </div>
          </Col>
      </Row>
    </Container>
  );
};

export default Services;
