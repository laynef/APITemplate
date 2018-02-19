const connect = require('connect');
const {...security} = require('./security');
const {...format} = require('./format');

// Always last
const {...errorHandling} = require('./errorHandling');

module.exports = (function () {
    let chain = connect();
    Object.values({
        // list of middleware: order matters
        ...security,
        ...format,
        ...errorHandling,
    }).forEach(e => {
        chain.use(e);
    });
    return chain;
}());
