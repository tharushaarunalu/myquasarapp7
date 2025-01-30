const express = require('express');
const router = express.Router();

// Dummy data for train schedules
const trains = [
  { trainNumber: 'SL100', from: 'Colombo', to: 'Kandy', date: '2025-01-28', class: 'Sleeper', availableSeats: 50, price: 500, departureTime: '09:00', arrivalTime: '12:00' },
  { trainNumber: 'SL101', from: 'Colombo', to: 'Kandy', date: '2025-01-28', class: 'First Class', availableSeats: 20, price: 1000, departureTime: '14:00', arrivalTime: '17:00' },
  { trainNumber: 'SL102', from: 'Kandy', to: 'Colombo', date: '2025-01-28', class: 'Sleeper', availableSeats: 40, price: 450, departureTime: '16:00', arrivalTime: '19:00' },
  // Add more dummy data as needed
];

// Train search route
router.get('/trains', (req, res) => {
  const { origin, destination, date, class: trainClass, passengers } = req.query;

  // Filter trains based on query parameters
  let filteredTrains = trains.filter(train => {
    return (
      (train.from.toLowerCase() === origin.toLowerCase()) &&
      (train.to.toLowerCase() === destination.toLowerCase()) &&
      (train.date === date) &&
      (train.class.toLowerCase() === trainClass.toLowerCase())
    );
  });

  // Render results page with filtered trains
  res.render('train', { trains: filteredTrains, passengers });
});

module.exports = router;
