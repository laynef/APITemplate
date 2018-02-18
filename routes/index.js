const express = require('express');
const router = express.Router();
const {notfound} = require('../controllers/notfound');

// Declare routes
router.get('*', notfound);

module.exports = router;
