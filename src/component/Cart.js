import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './Payment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
      '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
      },
  },
}));

function Cart() {

  const classes = useStyles();

  const cart = localStorage["cart"] ? JSON.parse(localStorage["cart"]) : "empty";

  return (

    cart !== 'empty' ? <div>{cart.items.map((product) => 
      (<div className="cart_product">

        <span><b>קוד מוצר:</b></span>
        <span>{product.id}</span><br />

        <span><b>שם מוצר:</b></span>
        <span>{product.name}</span><br />

        <span><b>מחיר:</b></span>
        <span>{product.price}</span><br />

        <span><b>קטגוריה:</b></span>
        <span>{product.category}</span><br />
      </div>)
    )}<span>{` הסכום לתשלום: ${cart.totalSum}`}</span>
      <Link className="my_link" to="/תשלום"> <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        id="smaller"
      >
        תשלום
            </Button></Link>
      <Route path="/תשלום">
        <Payment />
      </Route>


    </div> : <h3>עדיין אין מוצרים בסל</h3>
  );
}

export default Cart;