import React, { Component } from 'react'
import HeroSection from './HeroSection.js'
import Catalogue from './Catalogue.js'

const LabMain = ({handleAddProduct}) => {

  return (
    <>
        <div>
            <HeroSection/>
            <Catalogue handleAddProduct = {handleAddProduct}/>
        </div>
    </> 
  )
}

export default LabMain