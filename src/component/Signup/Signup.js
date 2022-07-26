import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './signup.css';

const Signup = () => {

	const history = useHistory();
	const [user, setUser] = useState({
		name : "", email : "", phone: "", password : "" , cpassword: ""
	})

	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({...user, [name]:value});
	}

	const PostData = async (e) => {
		e.preventDefault();

		const { name, email, phone, password, cpassword} = user;
		// http://localhost:5000/register
		const res = await fetch('/register', {
			method: "POST",
			// credentials: 'include',
			headers: {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify({
				name, email, phone, password, cpassword	
			})
		});

		const data = await res.json();

		if(data.status === 422 || !data){
			window.alert("Invalid Registration");
			console.log("Invalid Registration");
		}
		else{
			window.alert("Registration Successful");
			console.log("Registration Successful");

			history.push("/login");
		}
	}

  	return (
    <>
        <div class="container sign-up h-100">
    		<div class="row h-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4 mb-4">
							<h1 class="h2">Sign Up.</h1>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<form method='POST'>
										<div class="form-group position-relative">
                                            <span class="zmdi zmdi-account zm"></span>
                                            <input className = "ico" type="text" name = "name" id="name" class="form-control" 
											value={user.name}
											onChange = {handleInputs}
											placeholder="Enter your name"></input>
                                        </div>
										<div class="form-group position-relative">
                                            <span class="zmdi zmdi-email zm"></span>
                                            <input className = "ico" type="email" name = "email" id="email" class="form-control" 
											value={user.email}
											onChange = {handleInputs}
											placeholder="Enter your Email"></input>
                                        </div>
										<div class="form-group position-relative">
                                            <span class="zmdi zmdi-phone zm"></span>
                                            <input className = "ico" type="number" name = "phone" id="phone" class="form-control" 
											value={user.phone}
											onChange = {handleInputs}
											placeholder="Enter your Phone Number"></input>
                                        </div>
                                        <div class="form-group position-relative">
                                            <span class="zmdi zmdi-lock zm"></span>
                                            <input className = "ico" type="password" name = "password" id="password" class="form-control" 
											value={user.password}
											onChange = {handleInputs}
											placeholder="Enter your Password"></input>
                                        </div>
										<div class="form-group position-relative">
										<span class="zmdi zmdi-lock-outline zm"></span>
											<input className="ico" type="password" name = "cpassword" id="password" class="form-control" 
											value={user.cpassword}
											onChange = {handleInputs}
											placeholder="Re-Enter password"></input>
										</div>
										<div class="text-center mt-3 form-button">
                                            <input type="submit" name="signup" id="signup" onClick = {PostData} class="btn btn-primary" value="register"/>
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default Signup