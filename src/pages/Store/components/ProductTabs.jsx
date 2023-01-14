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
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";

const ProductTabs = () => {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      // the naming can be any, depends on you.
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

  const data = [
    {
      image:
        "http://d2r9epyceweg5n.cloudfront.net/stores/001/669/748/products/flyer1-0e830f136490111c1716264629846765-640-0.png",
      title: "AA",
      desc: "AA",
    },
    {
      image:
        "http://d2r9epyceweg5n.cloudfront.net/stores/001/669/748/products/flyer1-0e830f136490111c1716264629846765-640-0.png",
      title: "AA",
      desc: "AA",
    },
    {
      image:
        "http://d2r9epyceweg5n.cloudfront.net/stores/001/669/748/products/flyer1-0e830f136490111c1716264629846765-640-0.png",
      title: "AA",
      desc: "AA",
    },
    {
      image:
        "http://d2r9epyceweg5n.cloudfront.net/stores/001/669/748/products/flyer1-0e830f136490111c1716264629846765-640-0.png",
      title: "AA",
      desc: "AA",
    },
  ];

  return (
    <div>
      <Box>
        <StyledTabs value={value} onChange={handleChange} centered>
          <StyledTab label="Novos" />
          <StyledTab label="Top" />
          <StyledTab label="Mais vendidos" />
        </StyledTabs>
      </Box>
      <Container style={{ marginTop: 40 }}>
        <Carousel
          responsive={responsive}
          autoPlay={!isMobile ? true : false}
          infinite
        >
          {data.map((item, index) => {
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
                <CardMedia sx={{ height: 300 }} image={item.image} />
                <CardContent>
                  <Typography
                    style={{ color: "#ababab" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    style={{ color: "#fff" }}
                    variant="body2"
                    color="text.secondary"
                  >
                   <b>R$30,00</b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="danger" style={{ width: "100%" }}>
                    Comprar
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Carousel>
      </Container>
      <Container style={{ padding: 50, borderWidth: 10, borderColor: '#fff' }}>
        <Row>
          <Col>
            <Typography variant="h6">Não achou o que procurava?</Typography>
            <Typography variant="p">Solicite seu orçamento no WhatsApp e tenha seu arquivo em até 2 horas.</Typography>
          </Col>
          <Col>
            <Button variant="danger" style={{ width: "100%", heigth: "100%" }}>
              Whatsapp
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductTabs;
