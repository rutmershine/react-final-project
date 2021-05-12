
import React, { useState, useEffect, useContext } from 'react';
import { productContext } from './ProductsContext';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function MediaCard(props) {
  const products = useContext(productContext)
  const { id } = useParams();
  const id2 = id ? id : props.id;
  const product = products.products.find(p => p.id === id2);

  const addToCart = () => {
    const cart = localStorage["cart"] ? JSON.parse(localStorage["cart"]) : { items: [], totalSum: 0 };
    cart.items.push(product);
    cart.totalSum += product.price;
    localStorage["cart"] = JSON.stringify(cart);
  }

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }));

  const classes = useStyles();

  return (product ?
    <Card className={`${classes.root} big_pic`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

            {product.price}

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button
          onClick={() => addToCart()}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          add to cart
            </Button>
      </CardActions>
    </Card> : ''
  );
}
