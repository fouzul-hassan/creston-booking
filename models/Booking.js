const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    roomId : {
        type : String,
        required: true,
        unique: true
    },
    checkIn : {
        type : String,
        required: true,
        unique: true
    },
    checkOut : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    nic : {
        type : Number,
        required: true
    },
    remarks : {
        type : String,
        required: true
    }
    
})


const Booking = mongoose.model('Booking',bookingSchema);

module.exports = Booking;