import React from 'react';
import './BuyCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import CardDesign from './CardDesign';

const HealthMap = ({healthData, handleAddProduct}) => {
  return (
      <>
        <h2 className='main-heading'>HEALTH SUPPLEMENTS</h2>
        <CardDesign data={healthData} handleAddProduct={handleAddProduct}/>
      </>
  )
}

export default HealthMap