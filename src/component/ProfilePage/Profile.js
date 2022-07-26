import React, { useEffect } from 'react';
import './profile.css';
import {useHistory} from "react-router-dom"; 

const Profile = () => {
    
    const history = useHistory();

    const callAboutPage = async () => {
        try{
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if(res.status != 200){
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
        
        <div className='main-body'>
            {/* <!-- Breadcrumb --> */}
            <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/buy">Buy</a></li>
                <li class="breadcrumb-item"><a href="/booktest">Book Test</a></li>
                </ol>
            </nav>
            {/* <!-- /Breadcrumb --> */}
            <form method = "GET">
                <div class='row'>
                    <div class = "column">
                        <div class="carrd-body">
                            <div class="d-flex flex-column align-items-center text-center"> 
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"></img>
                                <div class="mt-3">
                                    <h4>John Doe</h4>
                                    <p class="text-secondary mb-1">Full Stack Developer</p>
                                    <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class = "column colmn-2">
                        <div class="carrd-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Full Name</h6>
                                </div>
                                    <div class="col-sm-9 text-secondary"> Kenneth Valdez</div>
                            </div>

                            <hr></hr>

                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary"> fip@jukmuh.al</div>
                            </div>

                            <hr></hr>

                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Phone</h6>
                                </div>
                                <div class="col-sm-9 text-secondary"> (239) 816-9029</div>
                            </div>
                            <hr></hr>
                            
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Mobile</h6>
                                </div>
                                <div class="col-sm-9 text-secondary"> (320) 380-4539</div>
                            </div>
                            <hr></hr>
                            
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Address</h6>
                                </div>
                                <div class="col-sm-9 text-secondary"> Bay Area, San Francisco, CA</div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-12">
                                    <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Profile