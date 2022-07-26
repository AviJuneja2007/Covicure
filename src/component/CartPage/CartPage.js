import React,{useState} from 'react'
import CartHeader from '../CartPage/CartHeader';
import CartMain from '../CartPage/CartMain';

const CartPage = ({cartItems , handleAddProduct, handleRemoveProduct , handleCartClearance}) => {

  return (
    <div>
      <CartHeader/>
      <CartMain 
        cartItems={cartItems}
        handleAddProduct = {handleAddProduct}
        handleRemoveProduct = {handleRemoveProduct}
        handleCartClearance = {handleCartClearance}
      />
    </div>
  )
}

export default CartPage
