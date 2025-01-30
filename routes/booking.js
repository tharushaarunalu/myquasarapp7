const express = require('express');
const router = express.Router();

// Booking form
router.get('/', (req, res) => {
  const { trainNumber, passengers } = req.query;
  res.render('booking', { trainNumber, passengers });
});

module.exports = router;
