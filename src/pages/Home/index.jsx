import React from "react";

import foto from "../../assets/foto.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Button, Stack, Container, Image } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { ToastContainer, toast } from "react-toastify";

import RNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import Services from "./components/Services";

const Home = () => {
  const notify = () =>
    toast("🚀 Site em construção!", {
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
      <RNavbar />
      <div
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <header
          className="App-header"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.77)" }}
        >
          <ToastContainer />
          <Container>
            <h1 style={{ fontSize: "3rem", paddingBottom: 0 }}>
              Eu sou Raul Rodrigues
            </h1>
            <TypeAnimation
              sequence={[
                "Designer Gráfico",
                1000,
                "Desenvolvedor full stack web",
                1000,
                "Desenvolvedor full stack android",
                1000,
                "Freelancer",
                1000,
              ]}
              speed={50}
              wrapper="p"
              style={{ fontWeight: "bold", fontSize: "2rem", color: "#939593" }}
              repeat={Infinity}
            />
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button variant="danger" href="https://wa.me/+556892402096">
                Contato
              </Button>
              <Button variant="outline-danger" href="#projetos">
                Projetos
              </Button>
            </Stack>
          </Container>
        </header>
      </div>
      <main>
        <div className="section dark">
          <Container id="sobre">
            <Image
              alt="foto de Raul Rodrigues de Moraes"
              src={foto}
              rounded
              fluid
              style={{ width: 400, marginBottom: 20 }}
            />
            <h1>Sobre</h1>
            <div style={{ textJustify: "auto" }}>
              <p>
                Raul Rodrigues de Moraes, conhecido como Luar Rekcah, é um profissional altamente capacitado na área de design e desenvolvimento web.
              </p>
              <p>
                Iniciou sua carreira na empresa D Walt Engenharia como Designer Gráfico e desenvolvedor web full stack, tendo sido rapidamente promovido a Diretor de Marketing, onde gerenciava publicações, campanhas de Google ADS e outras atividades relacionadas. Durante sua carreira, tem se destacado pelo desenvolvimento e manutenção de sites, além de dominar tecnologias específicas para tarefas relacionadas.
              </p>
              <p>
                Luar Rekcah possui ampla experiência em linguagens de programação, marcação e bibliotecas, tais como:{" "}
                <b>
                  JavaScript, Python, C, Bootstrap, Express, React Native,
                  Next.js, ReactJS, NuxtJS, Discord.js, Venom-bot, Twit,
                  Node.js, Passport, Firebase Database, EJS, HTML, CSS e Stripe
                </b>
                . Além disso, possui habilidades avançadas em softwares de manipulação vetorial e bitmap, como:
                <b>CorelDRAW e Photoshop.</b>
                Ele é considerado um especialista em sua área e sempre se mantém atualizado com as tendências e tecnologias mais recentes.
              </p>
            </div>
          </Container>
        </div>
        <div className="section dark">
          <Container id="projetos">
            <h1>Projetos</h1>
            <Projects />
          </Container>
        </div>

        <div id="servicos" className="section">
          <h1>Serviços</h1>
          <Services />
        </div>
        <div className="section dark">
          <h1>Parceiros</h1>
          <Partners />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
