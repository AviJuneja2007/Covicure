import React from 'react'
// import cartpic from '../images/cart.png'
import './cartheader.css'

const cartheader = () => {
  return (
    <>
    <div className='cartpage'>
    <div className="cartcontainer">
        {/* <img src={cartpic} alt="" /> */}
        <div className="slogan">
          <h1>Checkout Cart</h1>
        </div>
        <div className="bodyContent">
            <p>
            We make sure that your order gets delivered as soon as possible, with our insta-delivery.</p>
        </div>
    </div>
  </div>
</>
  )
}

export default cartheader
