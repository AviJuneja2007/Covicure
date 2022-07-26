import React from 'react'
import DonorPic from '../images/donorPic.png';
import Button from "react-bootstrap/Button";
import './donorheader.css';

const donorheader = () => {
  return (
    <>
      <div className="donorcontainer">
            <img src={DonorPic} alt="" />
            <div className="donorcaption">
              <h4>Join hands for a noble deed</h4>
            </div>
            <div className="slogan">
              <h1>"It feels good, It makes me Proud, I am a blood donor.”</h1>
            </div>
            <a href="#join">
            <Button>
              <span>BE A DONOR</span>
            </Button>
            </a>
            <a href="#find">
            <Button>
              <span>FIND DONOR</span>
            </Button>
            </a>
        </div>
    </>
  )
}

export default donorheader
