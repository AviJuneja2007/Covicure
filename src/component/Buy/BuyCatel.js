import React, {useState} from 'react';
import BuyCard from './CovidMap';
import Covidess from './covidEss.js';
import Cough from './coughCold.js';
import Stomach from './stomachCare.js';
import Pain from './painRelief.js';
import Skin from './skinCare.js';
import Health from './healthSupp.js';
import Eye from './eyeCare.js';
import Devices from './healthDevices.js';
import CovidMap from './CovidMap.js';
import CoughMap from './CoughMap.js';
import StomachMap from './StomachMap.js';
import PainMap from './PainMap.js';
import SkinMap from './SkinMap.js';
import HealthMap from './HealthMap.js';
import EyeMap from './EyeMap.js';
import DeviceMap from './DeviceMap.js';

const BuyCatel = ({handleAddProduct}) => {

    const[covidData, setCovidData] = useState(Covidess);
    const[coughData, setCoughData] = useState(Cough);
    const[stomachData, setStomachData] = useState(Stomach);
    const[PainData, setPainData] = useState(Pain);
    const[skinData, setskinData] = useState(Skin);
    const[healthData, sethealthData] = useState(Health);
    const[eyeData, setEyeData] = useState(Eye);
    const[deviceData, setDevicesData] = useState(Devices);

  return (
    <>
        <CovidMap covidData = {covidData} handleAddProduct={handleAddProduct}/>
        <CoughMap coughData = {coughData} handleAddProduct={handleAddProduct}/>
        <StomachMap stomachData = {stomachData} handleAddProduct={handleAddProduct}/>
        <PainMap PainData = {PainData} handleAddProduct={handleAddProduct}/>
        <SkinMap skinData = {skinData} handleAddProduct={handleAddProduct}/>
        <HealthMap healthData = {healthData} handleAddProduct={handleAddProduct}/>
        <EyeMap eyeData = {eyeData} handleAddProduct={handleAddProduct}/>
        <DeviceMap deviceData = {deviceData} handleAddProduct={handleAddProduct}/>
    </>
  )
}

export default BuyCatel