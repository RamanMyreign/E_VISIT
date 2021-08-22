const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    pEmail: {
        type: String,
        require: true
    },
    timing: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})
const doctorListSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    from: {
        type: Number,
        min: 1,
        max: 23,
        required: true
    },
    to: {
        type: Number,
        min: 2,
        max: 24,
        required: true
    },
    slot: [{time: String, isBooked:Boolean}],

    appointment: [appointmentSchema],
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("DoctorList", doctorListSchema);