import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  padding: theme.spacing(1),
}));

const AllProducts = ({onOpenModal}) => {
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
        <h1>Carregando...</h1>
      </div>
    );
  } else {
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
              <Item key={index}>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{
                    width: "18rem",
                    backgroundColor: "#282c34",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <CardMedia sx={{ height: 300 }} image={item.data.image} />
                  <CardContent>
                    <Typography
                      style={{ color: "#fff" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      <b>
                        R$
                        <b style={{ fontSize: 18, marginLeft: 5 }}>
                          {item.data.valor}
                        </b>
                      </b>
                    </Typography>
                    <p>{item.data.desc}</p>
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
              </Item>
            );
          })}
        </Grid>
        
      </Container>
    );
  }
};

export default AllProducts;
