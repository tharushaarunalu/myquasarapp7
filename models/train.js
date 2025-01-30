const mongoose = require('mongoose');

// Define the schema for the train
const trainSchema = new mongoose.Schema({
    trainName: {
        type: String,
        required: true
    },
    originStation: {
        type: String,
        required: true
    },
    destinationStation: {
        type: String,
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
    class: {
        type: String,
        enum: ['AC', 'Sleeper', 'General'],
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    journeyDate: {
        type: Date,
        required: true
    }
});

// Create the Train model
const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
