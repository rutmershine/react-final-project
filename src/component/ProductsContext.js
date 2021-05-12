import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const productContext = createContext([]);

export default function ProductsContext(props) {

  const [products, setProducts] = useState({
    products: [],
    setProducts: (prod) => {
      setProducts({
        products: prod,
        setProducts: products.setProducts,
      })
    }
  });


  useEffect(() => {

    axios.get('/products.json')

      .then((data) => {
        products.setProducts(data.data);
      })
  }, []);

  return (
    <productContext.Provider value={products}>
      {props.children}
    </productContext.Provider>
  );
}


