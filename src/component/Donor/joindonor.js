import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';
import './joindonor.css'


const Joindonor = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    donorname:'',
    number:'',
    bloodgrp:'',
  })

  function handleChange (event) {
      const {name, value}= event.target;
          setInput (prevInput => {
          return {
            ...prevInput,
            [name]: value
            
          }
        })
  }

  function handleSubmit(){
    const newDonor ={
      donorname: input.donorname,
      number: input.number,
      bloodgrp: input.bloodgrp,
    }

    return fetch('http://localhost:5000/create', {
        method: 'POST',
        body: JSON.stringify(newDonor),
        headers: { 
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(alert("Donor Will Be Added After Verification")); 
    
}
  return (
    <>
    <div className='formpart' id="join">
    <h3>Volunteer / Refer a Donor</h3>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Name of Donor" onChange={handleChange} name ="donorname" value={input.donorname}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="number" placeholder="Donor's Contact Number" onChange={handleChange} name ="number" value={input.number} />
  </Form.Group>
  <Form.Group className=" mb-3" controlId="formBasicEmail">
    <Form.Control className='pickgrp' type="text" placeholder="Donor's Blood Group (In Blocks)" onChange={handleChange} name ="bloodgrp" value={input.bloodgrp} />
  </Form.Group>
  {/* <Dropdown>
  <Dropdown.Toggle variant="success" className='selectbutt' id="dropdown-basic">
    Select Blood Group
  </Dropdown.Toggle>

  <Dropdown.Menu onChange={handleChange} name ="bloodgrp">
    <Dropdown.Item href="#/A+" value="A+">A+</Dropdown.Item>
    <Dropdown.Item href="#/A-">A-</Dropdown.Item>
    <Dropdown.Item href="#/B+">B+</Dropdown.Item>
    <Dropdown.Item href="#/B-">B-</Dropdown.Item>
    <Dropdown.Item href="#/O+">O+</Dropdown.Item>
    <Dropdown.Item href="#/O-">O-</Dropdown.Item>
    <Dropdown.Item href="#/AB+">AB+</Dropdown.Item>
    <Dropdown.Item href="#/AB-">AB-</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Donor is not on any sort of  medication/ diabetic/ and has systolic and diastolic blood pressure levels under normal range." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Donor gives their consent for public display of their contact details." />
  </Form.Group>
  <Button variant="primary" className='joinbutton' type="submit" onClick={handleSubmit}>
    Join Hands 🤝 
  </Button>
</Form>
</div>
    </>
  )
}

export default Joindonor




