import React, {useContext} from 'react';
import "./navbar.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import logo1 from "../images/logo2.png";
import headerpic from "../images/header-photo.png";
import { FaHome, FaHandHoldingUsd, FaSearch, FaShoppingCart} from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom"

import {UserContext} from '../../App';

const Header = ({cartItems}) => {
    const {state, dispatch} = useContext(UserContext);

    const RenderMenu = () => {
        if(state){
            return (
                <>
                <div className='main-nav'>
                    {/* 1st logo part */}
                    <div className='logo'>
                        {/* <h1>COVICURE</h1> */}
                        <NavLink to="/"><img src={logo1} alt="" /></NavLink>
                    </div>

                    {/* Remaining menu part */}
                    <div className='menu-link'>
                        <ul>
                            <li>
                                <NavLink to="/"><FaHome/> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/buy"><FaHandHoldingUsd/> Buy</NavLink>
                            </li>
                            <li>
                                <NavLink to="/booktest"><BiTestTube/> Book Test</NavLink>
                            </li>
                            <li>
                                <NavLink to="/donor"><FaSearch/> Find Donor</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cartpage"><FaShoppingCart/>
                                {cartItems.length === 0 ? "" : "  " + cartItems.length + "  "}
                                Cart
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/profilepage"><BsPersonCircle/> Profile</NavLink>
                            </li> */}
                            {/* <div className = "log-btn">
                                <Button className='login-button' variant="outline-dark">
                                    <NavLink className = "log" to="/login">Login</NavLink>
                                </Button>
                            </div> */}
                            <li>
                                <NavLink to="/logout"><BsPersonCircle/> Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </>
            )
        }
        else{
            return (
                <>
                    <div className='main-nav'>
                        {/* 1st logo part */}
                        <div className='logo'>
                            {/* <h1>COVICURE</h1> */}
                            <NavLink to="/"><img src={logo1} alt="" /></NavLink>
                        </div>

                        {/* Remaining menu part */}
                        <div className='menu-link'>
                            <ul>
                                <li>
                                    <NavLink to="/"><FaHome/> Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/buy"><FaHandHoldingUsd/> Buy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/booktest"><BiTestTube/> Book Test</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/donor"><FaSearch/> Find Donor</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cartpage"><FaShoppingCart/> 
                                    {cartItems.length === 0 ? "  " : "  " + cartItems.length + "  "}
                                    Cart
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/profilepage"><BsPersonCircle/> Profile</NavLink>
                                </li> */}
                                <div className = "log-btn">
                                    <Button className='login-button' variant="outline-dark">
                                        <NavLink className = "log" to="/login">Login</NavLink>
                                    </Button>
                                </div>
                                {/* <li>
                                    <NavLink to="/logout"><BsPersonCircle/> Logout</NavLink>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <RenderMenu/>
    )
}

export default Header