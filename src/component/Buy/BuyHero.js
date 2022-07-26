import React,{ Component } from 'react';
import './BuyPage.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import buyimage from "../images/buypage-img.png";
import { FaCheckCircle } from "react-icons/fa";

const BuyHero = () => {
  return (
    <>
        <section className='buy-hero'>
                <div className='buy-left-info'>
                    <h1>Buy Medical Products</h1>
                    <p> <FaCheckCircle className='ico'/> Lower price</p>
                    <p> <FaCheckCircle className='ico'/> Convenience</p>
                    <p> <FaCheckCircle className='ico'/> Offers a range of options</p>
                    <Button className='prevent-button' variant="dark">
                        <span>BUY NOW</span>
                    </Button>
                </div>
                <div className='buy-img'>
                    <img src={buyimage} alt="" />
                </div>
        </section>
    </>
  )
}

export default BuyHero