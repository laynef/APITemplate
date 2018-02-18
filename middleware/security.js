const helmet = require('helmet');

module.exports = {

    helmet: (req, res, next) => {
        helmet();
        next();
    },

};
