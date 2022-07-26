import React, { useState } from 'react';
import './BuyCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import CardDesign from './CardDesign';

const CovidMap = ({covidData, handleAddProduct}) => {

  return (
      <>
        <h2 className='main-heading'>COVID-19 ESSENTIALS</h2>
        <CardDesign data={covidData} handleAddProduct={handleAddProduct}/>
      </>
  )
}

export default CovidMap