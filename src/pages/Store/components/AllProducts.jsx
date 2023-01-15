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
import React from "react";
import { Button } from "react-bootstrap";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  padding: theme.spacing(1),
}));

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

const AllProducts = () => {
  return (
    <Container style={{ marginTop: 40 }}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {data.map((item, index) => {
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
            </Item>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AllProducts;
