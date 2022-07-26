import React from 'react';
import './BuyCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import CardDesign from './CardDesign';

const SkinMap = ({skinData, handleAddProduct}) => {
  return (
      <>
        <h2 className='main-heading'>SKIN CARE</h2>
        <CardDesign data={skinData} handleAddProduct={handleAddProduct}/>
      </>
  )
}

export default SkinMap