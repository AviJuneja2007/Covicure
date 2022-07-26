import React, {useState} from 'react';
import './cartmain.css'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from  'react-icons/ai';
import Button from "react-bootstrap/Button"
import { FaTrashAlt } from "react-icons/fa";

const Cartmain = ({cartItems , handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    const totalPrice = cartItems.reduce((Price, item) => Price + item.quantity * item.Price, 0);
    return (
        <>
            <div className='cart-items'>
                <h2 className='cart-items-header'>Cart Items</h2>
                <div className='clear-cart'>
                    {cartItems.length >= 1 && (
                        <button className='clear-cart-button' onClick={handleCartClearance}>
                            Clear Cart
                        </button>
                    )}
                </div>

                {cartItems.length === 0 && (
                    <div className='cart-items-empty'>No Items are added.</div>
                )}

                <div> 
                    {cartItems.map((item) => {
                        return(
                            <>
                                <div className="billingitems">
                                    <div className="billitem">
                                        <div className="itemName">
                                            <p>{item.Name} </p>
                                        </div>
                                        <div className="itemprice">
                                            <p>₹ {item.Price}</p>
                                        </div>
                                        <div className="itemquantity">
                                            <button className = "cart-items-remove"
                                            onClick = {() => handleRemoveProduct(item)}><AiOutlineMinusCircle className='icon'/></button>
                                                <span>{item.quantity}</span>
                                            <button className = "cart-items-add"
                                            onClick = {() => handleAddProduct(item)}><AiOutlinePlusCircle className='icon'/></button>
                                        </div>
                                    </div>
                                </div>
                                
                            </>
                        )
                    })}
                    <div className="paymentamount">
                        <h5>Net Amount: </h5>
                        <Button className='amountButton'><span>₹{totalPrice}</span></Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cartmain

