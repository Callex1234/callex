const mongoose = require("mongoose");

const procesSchema = new mongoose.Schema({
    Process: {
        type: String,
    },
    Active: {
        type: Boolean,
    },
    Process_Description: {
        type: String,
    },
    Type: {
        type: String,
    },
    Auto_Wrapup: {
        type: Boolean,
    },
    Auto_Missed: {
        type: Boolean,
    },
    Auto_FirstLogin: {
        type: Boolean,
    },
    L1: {
        type: String,
    },
    L2: {
        type: String,
    },
    L3: {
        type: String,
    },

    DNC_Enable: {
        type: Boolean,
    },

    Number_Maskiing: {
        type: Boolean,
    },

    Disposition_Mandatory: {
        type: Boolean,
    },

    Sub_Sub_Disposition_Mandatory: {
        type: Boolean,
    },

});


const process = mongoose.model('process', procesSchema)

module.exports = process;