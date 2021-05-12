import { productContext } from './ProductsContext';
import React, { useState, useEffect, useContext } from 'react';
import Product from './Product';
import CategoryRoute from './CategoryRoute';
import {
  Route,
  Switch,
  Link,
  useRouteMatch
} from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



function Products() {

  let { path, url } = useRouteMatch();

  const products = useContext(productContext);
  const [updatedProducts, setUpdatedProducts] = useState(products.products);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();


  useEffect(() => {
    setUpdatedProducts(products.products);
  }, [products]);


  const showProducts = (category) => {
    return (
      <div>
      <div className='my_container'>

        {updatedProducts ? updatedProducts.filter(product => category ? product.category === category : true).map(product =>
          (<div key={product.id}><Link to={`${url}${category ? '/' + category : ''}/${product.id}`}><img src={product.image} className= "pic"></img></Link></div>)
          
        ) : ''}
      </div> 
      
      <div >
          <Route path={`${path}${category ? '/' + category : ''}/:id`}>
            <Product />
          </Route>
        </div>
      </div>);


  }

  return (
    <div className={classes.root}>
        <CategoryRoute />

        <Switch>
          <Route path={`${path}/נוף`}>
            {showProducts("נוף")}
          </Route>
          <Route path={`${path}/ילדים`}>
            {() => showProducts("ילדים")}
          </Route>
          <Route path={`${path}/ערים בעולם`}>
            {() => showProducts("ערים בעולם")}
          </Route>
          <Route path={`${path}/`}>
            {() => showProducts()}
          </Route>
        </Switch>
    </div>
  )
}

export default Products;