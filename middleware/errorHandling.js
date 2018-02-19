const {
    INTERNAL_SERVER_ERROR,
    errorPreview,
} = require('../utils/index');

module.exports = {

    internalErrorPreview: (error, req, res, next) => {
        if (error) {
            errorPreview(error, req, res, INTERNAL_SERVER_ERROR);
        } else {
            next();
        }
    },

};
