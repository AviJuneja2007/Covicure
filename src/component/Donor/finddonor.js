import React from 'react'
import './finddonor.css'
import DonorMain from './DonorShow';

// const dataDonor=[];
// function getData(){
//   return fetch('/getData',{
//     method: 'GET'
//   }).then(data=>dataDonor)
//   .then(data => console.log(dataDonor));
// }


const finddonor = () => {
//   getData(); 
  return (
    <>
    <div className="findSection" id="find">
      <h3 className='headding'>Find Blood Donor</h3>
      <div className="picker">
    <DonorMain/>
      </div>
      </div>
    </>
  )
}
export default finddonor
