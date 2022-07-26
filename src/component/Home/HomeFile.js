import React from 'react'
import Banners from '../layout/Banners';
import HeroSection from './HeroSection';
import Statistics from './Statistics';
import './homefile.css'

const HomeFile = () => {
        return (
            <>
                <div className='render'>
                    <HeroSection/>
                    <Statistics />
                    <Banners/>
                </div>
            </>
        );
}

export default HomeFile;