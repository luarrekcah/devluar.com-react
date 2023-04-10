import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import axios from "axios";
import ProductItem from "./compsChild/ProductItem";

const AllProducts = ({ onOpenModal }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.data.nome.toLowerCase().includes(searchValue.toLowerCase())
  );

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
      <div
        style={{ display: "flex", justifyContent: "center", paddingBottom: 20 }}
      >
        <Form.Control
          type="text"
          placeholder="Pesquisar produto"
          value={searchValue}
          onChange={handleSearchChange}
          style={{ width: "50%" }}
        />
      </div>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {filteredProducts.map((item, index) => {
          return (
            <div style={{ margin: 5 }}>
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
