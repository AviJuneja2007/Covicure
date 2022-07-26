import React from 'react'
import './labCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const LabCard = ({labData, handleAddProduct}) => {
    // console.log(labData);
  return (
    <>
        <div className='wrapper'>
            {labData.map((curElem) => {
                return(
                    <>
                        <div className='card-container blue-hover' key={curElem.id}>
                            <div className='upper'>
                                <div className='price'>
                                    <span>₹ {curElem.Price}</span>
                                </div>
                                <div className='name'>
                                    <span>{curElem.Name}</span>
                                </div>
                            </div>
                            <div className='lower'>
                                <p>{curElem.Description}</p>
                                <Button className='book-button'variant="dark"
                                    onClick={() => handleAddProduct(curElem)}>
                                    <span>BOOK TEST</span>
                                </Button>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    </> 
  )
}

export default LabCard