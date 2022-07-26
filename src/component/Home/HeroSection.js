import React, { Component } from 'react';
import "./header.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import logo1 from "../images/logo.png";
import headerpic from "../images/header-photo.png";

// const HeroSection = () => {
class HeroSection extends Component{
    render() {
        return (
            <>
            {/* Hero Section */}
            <section className='hero-section'>
                <div className='left-info'>
                    <h3>COVID-19 AWARENESS</h3>
                    <b><h1>Stay Safe. Stay Home</h1></b>
                    <p>
                    Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                    </p>
                    <p>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.
                    </p>
                    <Button className='prevent-button' variant="dark">
                        <span>HOW TO PREVENT</span>
                    </Button>
                </div>
                <div className='hero-image'>
                    <img src={headerpic} alt="" />
                </div>
            </section>
            </>
        );
    }
}

export default HeroSection