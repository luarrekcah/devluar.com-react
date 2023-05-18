import React, {memo} from 'react';
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { Badge, Button } from "react-bootstrap";

const ProductItem = memo((({ item, index, onOpenModal }: any) => {
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
        <h3>{item.data.nome}</h3>
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
}));

export default ProductItem;
