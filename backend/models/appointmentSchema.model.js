const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    timing: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    pEmail: {
        type: String,
        require: true
    },
   
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Appoint", appointmentSchema);