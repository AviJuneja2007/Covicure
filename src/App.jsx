import React, {useState,createContext, useReducer} from 'react';
import { Route, Switch} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/layout/Header.js";
import HomeFile from './component/Home/HomeFile';
import BuyPage from './component/Buy/BuyPage.js';
import LabPage from './component/LabTest/LabMain';
import Signup from './component/Signup/Signup.js';
import Login from './component/Signin/Signin.js';
import Error from './component/ErrorPage/ErrorPage.js';
import Profile from './component/ProfilePage/Profile';
import CartPage from './component/CartPage/CartPage';
import Logout from './component/Logout/Logout';

import Donorpage from './component/Donor/DonorPage';

import {initialState, reducer} from "../src/reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  const [cartItems, setCartItems] = useState([]);
    
  const handleAddProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if(ProductExist){
        setCartItems(
          cartItems.map((item) => 
            item.id === product.id
            ? {... ProductExist, quantity : ProductExist.quantity + 1} : item
          )
        );
      }
      else{
        setCartItems([...cartItems, {...product, quantity : 1}]);
      }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item) => 
          item.id === product.id
          ? {...ProductExist, quantity: ProductExist.quantity - 1} : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  }

    return(
      <>
      <Header cartItems = {cartItems}/>
        <Switch>
          <Route exact path = "/" component={HomeFile}/>
          <Route path = "/buy">
            <BuyPage handleAddProduct={handleAddProduct}/>
          </Route>
          <Route path = "/booktest">
            <LabPage handleAddProduct={handleAddProduct}/>
          </Route>
          <Route path = "/donor" component = {Donorpage}/>
          <Route path = "/signup" component = {Signup}/>
          <Route path = "/login" component={Login}/>
          <Route path = "/errorpage" component={Error}/>
          {/* <Route path = "/profilepage" component={Profile}/> */}
          <Route path = "/cartpage">
            <CartPage 
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct}
            handleRemoveProduct = {handleRemoveProduct}
            handleCartClearance = {handleCartClearance}
            />
          </Route>
          <Route path = "/logout" component={Logout}/>
        </Switch>
      </>
    )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>

      <UserContext.Provider value={{state, dispatch}}>
        <Routing/>
      </UserContext.Provider>
    </>
  );
}

export default App;
