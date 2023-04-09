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
import { Badge, Button, Spinner } from "react-bootstrap";
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
         <Spinner animation="border" variant="danger" />
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
                  <CardContent style={{ color: "#fff" }}>
                      <p>
                        <Badge bg="danger">{item.data.categoria}</Badge>
                      </p>
                      <h4>{item.data.nome}</h4>
                      <p style={{fontSize: 18}}>
                        R$
                        <b style={{ marginLeft: 2 }}>
                          {item.data.valor}
                        </b>
                      </p>
                      <p style={{color: '#adadad'}}>{item.data.desc}</p>
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
