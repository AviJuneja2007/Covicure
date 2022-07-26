import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PreventBanner from "../images/Prevent.png";
import BuyBanner from "../images/Buy-medicines.png"
import TestBanner from "../images/Book-test.png"
import DonorBanner from "../images/Find-Donors.png"
import "../layout/Banners.css";

class Banners extends Component{
    render(){
        return(
            <>
                <div className='banners'>
                    <Link className = 'first' to = '/prevent'>
                        <img src={PreventBanner} alt="" />
                    </Link>
                    <Link className = 'second' to = '/buy'>
                        <img src={BuyBanner} alt="" />
                    </Link>
                    <Link className = 'third' to = '/booktest'>
                        <img src={TestBanner} alt="" />
                    </Link>
                    <Link className = 'fourth' to = '/donor'>
                        <img src={DonorBanner} alt="" />
                    </Link>
                </div>
            </>
        );
    }
}

export default Banners