import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FormContact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(`Olá! Meu nome é ${name}. Mensagem: ${message}`);
    const url = `https://wa.me/556892402096?text=${encodedMessage}`;
    window.location.href = url;
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nome:</Form.Label>
              <Form.Control type="text" placeholder="Insira seu nome" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Mensagem:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Digite sua mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" style={{marginTop: 20, width: '100%'}}>
              Enviar
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Solicite seu orçamento agora mesmo!</h3>
          <p>Conheça mais do meu trabalho nas minhas redes sociais.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContact;
