const sess = require('express-session');
const RedisStore = require('connect-redis')(sess);
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL || 'redis://localhost:6381');

module.exports = {

    session: sess({
        secret: 'secret',
        store: new RedisStore({ client: client, disableTTL: true }),
        saveUninitialized: true,
        resave: false,
        name: 'NewProject',
        cookie: {
            secure: true,
        },
    }),

};
