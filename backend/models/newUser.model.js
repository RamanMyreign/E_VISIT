const mongoose  = require('mongoose');

const newUser = mongoose.Schema({
    firstName : {
        type: String
       
     },
    lastName : {
        type : String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true,
    },
   
    date: {
        type: Date,
        default: Date.now,
      }
})


module.exports = mongoose.model("NewUser", newUser);