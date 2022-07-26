import React from 'react';
import './BuyCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import CardDesign from './CardDesign';

const StomachMap = ({stomachData, handleAddProduct}) => {
  return (
      <>
        <h2 className='main-heading'>STOMACH CARE</h2>
        <CardDesign data={stomachData} handleAddProduct={handleAddProduct}/>
      </>
  )
}

export default StomachMap