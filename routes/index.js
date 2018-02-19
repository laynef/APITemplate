const express = require('express');
const router = express.Router();
const {notfound} = require('../controllers/notfound');
const allGets = require('./get');
const allDeletes = require('./deletes');
const allPosts = require('./post');
const allPatches = require('./patch');

// Declare routes
allGets.forEach(e => {
    let middleware = e.middleware ? e.middleware : [() => {}];
    router.get(e.route, ...middleware, e.controller);
});

allDeletes.forEach(e => {
    let middleware = e.middleware ? e.middleware : [() => {}];
    router.delete(e.route, ...middleware, e.controller);
});

allPosts.forEach(e => {
    let middleware = e.middleware ? e.middleware : [() => {}];
    router.post(e.route, ...middleware, e.controller);
});

allPatches.forEach(e => {
    let middleware = e.middleware ? e.middleware : [() => {}];
    router.patch(e.route, ...middleware, e.controller);
});

router.all('*', notfound);

module.exports = router;
