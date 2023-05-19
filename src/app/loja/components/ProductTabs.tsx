import React, { memo, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Spinner } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import ProductItem from "./compsChild/ProductItem";

import "react-multi-carousel/lib/styles.css";

const ProductTabs = ({ onOpenModal }: any) => {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("Design Gráfico");
  const [width, setWidth] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event: any, newValue: any) => {
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

  useEffect(() => {
    axios
      .get("/api/v1/products/getAll")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    // Check if `window` is defined before accessing it
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowSizeChange);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  
  const StyledTab = memo(
    styled(Tab)(({ theme }) => ({
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
    }))
  );

  const StyledTabs = styled(Tabs)(({ theme }) => ({
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
  }));

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
        <h3 style={{ color: "#adadad" }}>
          Nenhum produto registrado no momento.
        </h3>
      </div>
    );
  }

  interface ProductProps {
    data: {
      categoria: string;
    };
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
            .filter((item: ProductProps) => item.data.categoria === category)
            .map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  item={item}
                  index={index}
                  onOpenModal={onOpenModal}
                />
              );
            })}
        </Carousel>
      </Container>
    </div>
  );
};

export default ProductTabs;
