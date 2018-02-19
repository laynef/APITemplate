const {
    errorPreview,
} = require('../utils/index');

module.exports = {

    internalErrorPreview: (error, req, res, next) => {
        if (error && Number(error.status) >= 500) {
            errorPreview(error, req, res);
        } else {
            next();
        }
    },

};
