import React from 'react';
import './BuyCard.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import CardDesign from './CardDesign';

const EyeMap = ({eyeData, handleAddProduct}) => {
  return (
      <>
        <h2 className='main-heading'>EYE CARE</h2>
        <CardDesign data={eyeData} handleAddProduct={handleAddProduct}/>
      </>
  )
}

export default EyeMap