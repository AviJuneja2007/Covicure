import React, { Component } from 'react'
import LabHero from './BuyHero.js';
import BuyCatel from './BuyCatel.js'

const BuyPage = ({handleAddProduct}) => {
  return (
    <>
      <LabHero/>
      <BuyCatel handleAddProduct = {handleAddProduct}/>
    </>
  )
}

export default BuyPage