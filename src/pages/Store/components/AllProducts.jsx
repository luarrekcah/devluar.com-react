import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import axios from "axios";
import ProductItem from "./compsChild/ProductItem";

const AllProducts = ({ onOpenModal }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

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

  return (
    <Container style={{ marginTop: 40 }}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {products.map((item, index) => {
          return (
            <div style={{margin: 5}}>
            <ProductItem
              key={index}
              item={item}
              index={index}
              onOpenModal={onOpenModal}
            />
            </div>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AllProducts;
