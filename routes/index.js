const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs page
});

module.exports = router;
