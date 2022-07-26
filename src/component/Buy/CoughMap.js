import React, {useState} from 'react';
import './BuyCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import CardDesign from './CardDesign';

const CoughMap = ({coughData, handleAddProduct}) => {

  return (
      <>
        <h2 className='main-heading'>COUGH AND COLD</h2>
        <CardDesign data={coughData} handleAddProduct={handleAddProduct}/>
      </>
  )
}

export default CoughMap;