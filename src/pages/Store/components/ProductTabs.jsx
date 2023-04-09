import {
  Tab,
  Tabs,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Badge, Button, Spinner } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import axios from "axios";

const ProductTabs = ({ onOpenModal }) => {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("Design Gráfico");
  const [width, setWidth] = useState(window.innerWidth);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setCategory("Design Gráfico");
        break;
      case 1:
        setCategory("Software");
        break;
      case 2:
        setCategory("Pacote");
        break;
      case 3:
        setCategory("Ferramenta");
        break;
      case 4:
        setCategory("Outro");
        break;
    }
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    axios
      .get("https://api.devluar.com/getproducts")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-selected": {
        color: "#fff",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
    })
  );

  const StyledTabs = styled((props) => (
    <Tabs
      centered
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#FF0000",
    },
  });

  const isMobile = width <= 768;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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

  if (loading) {
    return (
      <div>
         <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div>
         <h1 style={{color: '#fff'}}>Nenhum produto registrado no momento.</h1>
      </div>
    );
  }


    return (
      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="secondary"
          >
            <StyledTab label="Design Gráfico" />
            <StyledTab label="Software" />
            <StyledTab label="Pacote" />
            <StyledTab label="Ferramenta" />
            <StyledTab label="Outro" />
          </StyledTabs>
        </Box>
        <Container style={{ marginTop: 40 }}>
          <Carousel
            responsive={responsive}
            autoPlay={!isMobile ? true : false}
            infinite
          >
            {products
              .filter((item) => item.data.categoria === category)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    sx={{ maxWidth: 345 }}
                    style={{
                      width: "18rem",
                      backgroundColor: "#282c34",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <CardMedia sx={{ height: 300 }} image={item.data.image} />
                    <CardContent style={{ color: "#fff" }}>
                      <p>
                        <Badge bg="danger">{item.data.categoria}</Badge>
                      </p>
                      <h4>{item.data.nome}</h4>
                      <p style={{ fontSize: 18 }}>
                        R$
                        <b style={{ marginLeft: 2 }}>{item.data.valor}</b>
                      </p>
                      <p style={{ color: "#adadad" }}>{item.data.desc}</p>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="danger"
                        style={{ width: "100%" }}
                        onClick={() => onOpenModal(item)}
                      >
                        Comprar
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
          </Carousel>
        </Container>
      </div>
    );
  
};

export default ProductTabs;
