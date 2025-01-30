const Train = require('../models/train'); // Assuming you have a Train model to interact with the database
const Booking = require('../models/booking'); // Assuming you have a Booking model to handle the booking process
const User = require('../models/user'); // Assuming you have a User model for user-related operations

// Render the homepage
exports.getHomePage = (req, res) => {
    res.render('index', {
        title: 'Railway Reservation System', // Title for the page
        message: 'Welcome to the Railway Reservation System!', // Message displayed on the homepage
    });
};

// Render the search page with available trains
exports.searchPage = (req, res) => {
    Train.find({}, (err, trains) => {
        if (err) {
            return res.status(500).send("Error occurred while fetching trains.");
        }
        res.render('search', { trains });
    });
};

// Handle search functionality based on criteria (origin, destination, date, class)
exports.searchTrains = async (req, res) => {
    const { origin, destination, date, classType } = req.body;

    try {
        const trains = await Train.find({
            originStation: origin,
            destinationStation: destination,
            journeyDate: date,
            class: classType
        });

        if (trains.length === 0) {
            // If no trains are found, send a message
            res.render('search', {
                title: 'Train Search Results',
                message: 'No trains found for your search criteria.',
                trains: [] // Empty array, no trains found
            });
        } else {
            // If trains are found, render the results
            res.render('search', {
                title: 'Train Search Results',
                trains: trains // Send the trains data to the view
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Handle train booking functionality
exports.bookTrain = async (req, res) => {
    const { trainId, userId } = req.body;

    try {
        // Assuming that you want to validate the train and user
        const train = await Train.findById(trainId);
        const user = await User.findById(userId); // Assuming you have a User model

        if (!train || !user) {
            return res.status(400).send('Invalid train or user');
        }

        // Create the booking entry in the Booking model
        const booking = await Booking.create({
            train: trainId,
            user: userId,
            status: 'Booked'
        });

        // Render the confirmation page with booking details
        res.render('confirmation', {
            title: 'Booking Confirmation',
            booking: booking,
            message: 'Your train booking is confirmed!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Booking failed');
    }
};
