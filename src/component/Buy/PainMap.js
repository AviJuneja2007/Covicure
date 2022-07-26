import React from 'react';
import './BuyCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import CardDesign from './CardDesign';

const PainMap = ({PainData, handleAddProduct}) => {
  return (
      <>
        <h2 className='main-heading'>PAIN RELIEF</h2>
        <CardDesign data={PainData} handleAddProduct={handleAddProduct}/>
      </>
  )
}

export default PainMap