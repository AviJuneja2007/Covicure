const mongoose= require("mongoose");

const donorSchema = new mongoose.Schema({
    donorname :{
        type: String,
        required: true
    },
    number :{
        type: Number,
        required: true
    },
    bloodgrp :{
        type: String,
        required: true
    },
});

const DONOR = mongoose.model("DONOR", donorSchema);
module.exports = DONOR;