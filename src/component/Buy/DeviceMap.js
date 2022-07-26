import React from 'react';
import './BuyCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import CardDesign from './CardDesign';

const DeviceMap = ({deviceData, handleAddProduct}) => {
  return (
      <>
        <h2 className='main-heading'>HEALTHCARE DEVICES</h2>
        <CardDesign data={deviceData} handleAddProduct={handleAddProduct}/>
      </>
  )
}

export default DeviceMap