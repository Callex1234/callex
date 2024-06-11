const mongoose = require("mongoose");

const outBoundRoutesSchema = new mongoose.Schema({
    Route_Name: {
        type: String,
    },
    Route_Description: {
        type: Boolean,
    },
    Route_Active: {
        type: String,
    },
    Route_Method: {
        type: String,
    },
    Add_Digist: {
        type: Boolean,
    },
    Auto_Missed: {
        type: Boolean,
    },
    DNC_Enable: {
        type: Boolean,
    },
});


const outBoundRoutes = mongoose.model('outBoundRoutes', outBoundRoutesSchema)

module.exports = outBoundRoutes;