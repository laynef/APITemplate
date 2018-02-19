const connect = require('connect');
const {...security} = require('./security');
const {...format} = require('./format');
const {...errorHandling} = require('./errorHandling');
const {redisClient, session} = require('./redis');

module.exports = {
    // For main express app
    app: (function () {
        let chain = connect();
        Object.values({
            // list of middleware: order matters
            ...security,
            session,
            ...format,
            ...errorHandling, // Always last
        }).forEach(e => {
            chain.use(e);
        });
        return chain;
    }()),

    // For reuse
    ...security,
    ...format,
    redisClient,
    session,
    ...errorHandling,
};
