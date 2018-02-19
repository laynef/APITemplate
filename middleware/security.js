const helmet = require('helmet');
const cors = require('cors');

module.exports = {

    helmet: helmet(),
    cors: cors(),
    hsts: helmet.hsts({
        maxAge: 31536000000,
        includeSubdomains: true,
        force: true,
    }),

};
