const mongoose = require('mongoose');

// Define the schema for booking
const bookingSchema = new mongoose.Schema({
    train: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Train',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Booked', 'Cancelled'],
        default: 'Booked'
    },
    bookingDate: {
        type: Date,
        default: Date.now
    }
});

// Create a model based on the schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
