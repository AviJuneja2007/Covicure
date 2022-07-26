const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

var cors = require('cors');

app.use(cors());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// app.use(function(req, res, next){
//     header("Access-Control-Allow-Origin: *");
//     next();
// })

dotenv.config({path: './config.env'});
const PORT = process.env.PORT || 5000;

// Database connection
require('./db/conn');

// const User = require('./models/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

// Middleware
// const middleware = (req, res, next) => {
//     console.log('Hello my middleware');
//     next();
// }

// app.get('/about', (req, res) => {
//     console.log('Hello my about');
//     res.cookie("Test" , "avi");
//     res.send(`Hello about world`);
// });

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});