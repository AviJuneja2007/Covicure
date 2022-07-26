import React from 'react'
import './BuyCard.css';
import Button from "react-bootstrap/Button";

const CardDesign = ({data, handleAddProduct}) => {
    return (
        <>
        <div className='wrapper'>
            {data.map((curElem) =>{
                return(
                <>
                    <div className='buy-card-container'>
                        <div className='buy-image'>
                        <img src={curElem.image} alt="" />
                        </div>

                        <div className='lower-part'>
                        <h2 className='naam'>{curElem.Name}</h2>
                        <p className='quant'> {curElem.Quantity} </p>
                        <p className='buy-price'>₹ {curElem.Price}</p>
                        <Button className='book-button'variant="dark"
                            onClick={() => handleAddProduct(curElem)}>
                            <span>BUY NOW</span>
                        </Button>
                        {/* <button className='book-button'>Buy Now</button> */}
                        </div>
                    </div>
                </>
                );
            })}
          </div>
        </>
    )
}

export default CardDesign;