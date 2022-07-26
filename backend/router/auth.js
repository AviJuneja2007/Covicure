const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const cookieParser = require("cookie-parser");
router.use(cookieParser());
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(cookieParser());

require('../db/conn');
const User = require('../models/userSchema');
const DONOR = require("../models/donorSchema.js");

router.get('/' , (req, res) => {
    res.send(`Hello World from the server router js`);
});

// Using promises
// router.post('/register' , (req, res) => {
//     const { name, email, phone, password, cpassword} = req.body;

//     if(!name || !email || !phone || !password || !cpassword){
//         return res.status(422).json({error : "Plz fill the field porperly"});
//     }

//     User.findOne({ email : email})
//         .then((userExist) => {
//             if(userExist){
//                 return res.status(422).json({error : "Email already exists"});
//             }  

//             const user = new User({name, email, phone, password, cpassword});

//             user.save().then(() => {
//                 res.status(201).json({message : "user registered successfully"});
//             }).catch((err) => res.status(500).json({ error : "Failed to register"}));
            
//         }).catch((err) => {console.log(err);});
// });

// Using async await
// Registration route
router.post('/register' , async (req, res) => {
    const { name, email, phone, password, cpassword} = req.body;

    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error : "Plz fill the field porperly"});
    }

    try{
        const userExist = await User.findOne({ email : email});

        if(userExist){
            return res.status(422).json({error : "Email already exists"});
        }
        else if(password != cpassword){
            return res.status(422).json({error : "Passwords are not matching."});
        }
        else{
            const user = new User({name, email, phone, password, cpassword});

            const userRegister = await user.save();
            if(userRegister){
                return res.status(201).json({message : "user registered successfully"});
            }
        }

    }catch(err){
        console.log(err);
    }
});

// login route

router.post('/signin' , async (req, res) => {
    try{
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({ error : "Please fill the data"});
        }

        const userLogin = await User.findOne({email : email});

        // console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
        
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken" , token, {
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true,
                path: '/signin',
                sameSite: 'Lax'
            });

            if(!isMatch){
                res.status(400).json({message : "Invalid Credentials Pass"});
            }
            else{
                res.json({message : "User Signin Successfully"});
            }
        }
        else{
            return res.status(400).json({ error : "Invalid Credentials"});
        }
    }
    catch(err){
        console.log(err);
    }
});

router.get('/about', authenticate , (req, res) => {
    console.log(`Hello my about`);
    res.send(req.rootUser);
});

router.get('/logout' , (req, res) => {
    console.log(`Hello my logout Page`);
    res.clearCookie('jwtoken', {path : '/'});
    res.status(200).send('User Logout');
});

router.post('/create',async(req,res)=>{
    const donorname = req.body.donorname;
    const number = req.body.number;
    const bloodgrp = req.body.bloodgrp;
    const newDONOR = new DONOR({
        donorname,
        number,
        bloodgrp
    });  
    try{
        await newDONOR.save((err,newDonors)=>{
            if(err) res.send('Error Saving');
            res.redirect(('/donor'));
            res.end();
        })
    }
    catch(err){
        console.log(err);
        res.redirect('/donor');
        res.end();
    }
});

module.exports = router;
