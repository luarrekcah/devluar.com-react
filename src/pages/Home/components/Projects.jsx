import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, Button } from "react-bootstrap";

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1035339172115918948/Sem_titulo-1.jpg",
      title: "D | WALT ENGENHARIA",
      description:
        "Site principal informativo sobre a empresa, com informações, desrições e até mesmo loja.",
      techs: "Node.js, Express, EJS e dependentes",
      link: "https://www.dlwalt.com",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1035340313356681326/Sem_titulo-1.jpg",
      title: "GeekNote: Para nerds.",
      description:
        "Aplicativo android com diversas funções, como orçamentos, anotações dinâmicas específicas e outros. Disponível na Play Store a partir de 03/23",
      techs: "React Native e dependentes",
      link: "#",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1035343386347057323/Sem_titulo-1.jpg",
      title: "Luarzito: Um simples bot para o Discord",
      description:
        "Bot de Discord bem estruturado e com diversos comandos de entretenimento ao usuário",
      techs: "Node.js, Discord.js e dependentes",
      link: "https://luarzito.devluar.com",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1035346356279193640/github.jpg",
      title: "D | Walt Gestão: Empresa",
      description:
        "Site para gestão de projetos solares, essa ferramenta é destinada aos donos das empresas cadastradas na plataforma. Possibilita o registro de clientes, funcionários e projetos solares.",
      techs: "Node.js, Express, EJS e dependentes",
      link: "https://gestao.dlwalt.com",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1035346356279193640/github.jpg",
      title: "D | Walt Gestão: Equipe",
      description:
        "Aplicativo para gestão de projetos solares, essa ferramenta é destinada aos funcionários das empresas cadastradas na plataforma D Walt Gestão Empresa.",
      techs: "React Native e dependentes",
      link: "https://gestao.dlwalt.com",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1035346356279193640/github.jpg",
      title: "D | Walt Gestão: Cliente",
      description:
        "Aplicativo para gestão de projetos solares, essa ferramenta é destinada aos clientes das empresas cadastradas na plataforma D Walt Gestão Empresa.",
      techs: "React Native e dependentes",
      link: "https://gestao.dlwalt.com",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1035344562249539584/Sem_titulo-1.jpg",
      title: "Gênios",
      description: "Site da Agência Gênios",
      techs: "Node.js, express, EJS e dependentes",
      link: "https://agenciagenios.com",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1037409499029442600/unknown.png",
      title: "MeCard",
      description:
        "Site com cards, para aqueles que desejam ter um tipo de perfil social, com diversos links, em um site, de forma bonita e elegante.",
      techs: "Node.js, express, EJS e dependentes",
      link: "https://me-card.glitch.me/@/raul",
    },
    {
      img:
        "https://cdn.discordapp.com/attachments/883779286719422534/1035346356279193640/github.jpg",
      title: "Inovart",
      description:
        "Projeto descontinuado pelo contratante (Falta de recursos para arcar com o valor do site)",
      techs: "Node.js, express, EJS e dependentes",
      link: "https://inovart.glitch.me",
    },
  ];

  return (
    <div>
      <Carousel responsive={responsive} autoPlay={!isMobile ? true : false} infinite>
        {data.map((i) => {
          return (
            <Card key={i.title} style={{ width: "18rem", backgroundColor: "#282c34", marginLeft:"auto",marginRight:"auto"}}>
              <Card.Img variant="top" src={i.img} />
              <Card.Body>
                <Card.Title>{i.title}</Card.Title>
                <Card.Text style={{ color: "#ababab" }}>
                  {i.description}
                </Card.Text>
                <Card.Text
                  style={{
                    backgroundColor: "#16191f",
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  <code>{i.techs}</code>
                </Card.Text>
                <Button
                  variant="danger"
                  style={{ width: "100%" }}
                  href={i.link}
                >
                  Ver projeto
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Projects;
