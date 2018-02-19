const express = require('express');
const router = express.Router();
const allGets = require('./get');
const allDeletes = require('./deletes');
const allPosts = require('./post');
const allPatches = require('./patch');
const {docs} = require('../controllers/docs');

// Declare routes
allGets.forEach(e => {
    let middleware = Array.isArray(e.middleware) ? e.middleware : [() => {}];
    router.get(e.route, ...middleware, e.controller);
});

allDeletes.forEach(e => {
    let middleware = Array.isArray(e.middleware) ? e.middleware : [() => {}];
    router.delete(e.route, ...middleware, e.controller);
});

allPosts.forEach(e => {
    let middleware = Array.isArray(e.middleware) ? e.middleware : [() => {}];
    router.post(e.route, ...middleware, e.controller);
});

allPatches.forEach(e => {
    let middleware = Array.isArray(e.middleware) ? e.middleware : [() => {}];
    router.patch(e.route, ...middleware, e.controller);
});

let all = allGets.map(e => ({...e, method: 'GET'}))
    .concat(allPosts.map(e => ({...e, method: 'POST'})))
    .concat(allPatches.map(e => ({...e, method: 'PATCH'})))
    .concat(allDeletes.map(e => ({...e, method: 'DELETE'})))
    .map(e => ({...e, middleware: e.middleware ? e.middleware : []}));

router.get('/docs', docs(all));

module.exports = router;
