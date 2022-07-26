import React, { Component } from 'react';
import '../LabTest/heroSect.css'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import logo1 from "../images/logo.png";
import labtest from '../images/labtest.png';

// const HeroSection = () => {
class HeroSection extends Component{
    render() {
        return (
            <>
            {/* Hero Section */}
            <div className='Labhero-section'>
                <div className='left-info'>
                    <h1>BOOK A TEST !!</h1>
                    <h2>Upto</h2>
                    <b><p className='off'>
                        50% OFF 
                    </p></b>
                    <p className='abovebutton'>
                        on lab tests &
                        health checkups.
                    </p>
                    <p>
                        includes Vitamin Profiles, Lipid 
                        Profile and many other tests.
                    </p>
                    <Button className='prevent-button' variant="dark">
                        BOOK NOW
                    </Button>
                </div>
                <div className='labhero-image'>
                    <img src={labtest} alt="" />
                </div>
            </div>
            </>
        );
    }
}

export default HeroSection