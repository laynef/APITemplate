const connect = require('connect');
const {...errorHandling} = require('./errorHandling');

module.exports = (function () {
    let chain = connect();
    Object.values({
        // list of middleware: order matters
        ...errorHandling,
    }).forEach(e => {
        chain.use(e);
    });
    return chain;
}());
