const express = require('express');
const router = express.Router();

// Dummy route for user login or registration
router.get('/', (req, res) => {
  res.render('user', { title: 'User Login/Register' });
});

module.exports = router;
