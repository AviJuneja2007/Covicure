import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown'
import '../Donor/joindonor.css';    

const placeorder = () => {
    function placed(event){
        window.alert("Order Placed Successfully!");
    }
    return (
        <>
        <div className='formpart formpart-new'>
        <h3>Complete Your Shipping Address</h3>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Billing Name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control type="text" placeholder="Contact Number"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="House/Flat No."/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Street / Sector"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="State"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I wish to receive delivery updates via SMS." />
            </Form.Group>
                
                <Button variant="primary" className='joinbutton' type="submit" onClick={placed}>
                    Place Order ✅
                </Button>
                </Form>
        </div>
        </>
      )
}

export default placeorder
