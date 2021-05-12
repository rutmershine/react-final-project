import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home';
import Products from './component/Products';
import Cart from './component/Cart';
import Payment from './component/Payment';
import About from './component/About';
import Management from './component/Management';
import ProductsContext from './component/ProductsContext';
import NewProduct from './component/NewProduct';
import Menu from './component/Menu';

function App() {
  return (

    <Router>

      <div className="app">
        <Menu/>
     

        <Switch >

          <Route path="/" exact>
            <Home />
          </Route>    
 
          <Route path="/מוצרים">
          {/* <ProductsContext> */}
             <Products className="down"/>
          {/* </ProductsContext>         */}
          </Route>
          <Route path="/סל קניות">
            <Cart className="down"/>
          </Route>
          <Route path="/תשלום">
            <Payment/>
          </Route>  
          <Route path="/אודות">
            <About/>
          </Route>  
          <Route path="/ניהול">
            <Management/>
          </Route>
          <Route path="/a">
            <NewProduct/>
          </Route>

        </Switch>
        </div>
    </Router>
  );
}

export default App;
