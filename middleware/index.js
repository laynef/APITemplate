const connect = require('connect');
const {...security} = require('./security');

// Always last
const {...errorHandling} = require('./errorHandling');

module.exports = (function () {
    let chain = connect();
    Object.values({
        // list of middleware: order matters
        ...security,
        ...errorHandling,
    }).forEach(e => {
        chain.use(e);
    });
    return chain;
}());
