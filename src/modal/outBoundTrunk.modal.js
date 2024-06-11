const mongoose = require("mongoose");

const outBoundTrunkSchema = new mongoose.Schema({
    Trunk_Name: {
        type: String,
    },
    Trunk_Description: {
        type: String,
    },
    Trunk_Active: {
        type: Boolean,
    },
    Trunk_Type: {
        type: String,
    },
    Technology: {
        type: String,
    },
    Channels: {
        type: String,
    },
    Zap_id: {
        type: String,
    },
    Custom_Setting: {
        type: Boolean,
    },
    Account_id: {
        type: String,
    },
    Provider_Id_Address: {
        type: String,
    },
    Context: {
        type: String,
    },
    Password: {
        type: String,
    },
    Type: {
        type: String,
    },
});


const outBoundTrunk = mongoose.model('outBoundTrunk', outBoundTrunkSchema)

module.exports = outBoundTrunk;