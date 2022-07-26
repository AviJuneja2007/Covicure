import React, {useState} from 'react';
import Lab from './labTestApi';
import LabCard from './LabCard.js'

const Catalogue = ({handleAddProduct}) => {
    const [labData, setLabData] = useState(Lab);

    return (
      <>
        <LabCard labData = {labData} handleAddProduct = {handleAddProduct}/>
      </>
    )
}

export default Catalogue