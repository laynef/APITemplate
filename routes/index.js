const express = require('express');
const router = express.Router();
const {notfound} = require('../controllers/notfound');

// Declare routes
router.all('*', notfound);

module.exports = router;
