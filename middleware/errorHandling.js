const {
    INTERNAL_SERVER_ERROR,
} = require('../utils/index');

module.exports = {

    internalError: (error, req, res, next) => {
        if (error) {
            res.status(INTERNAL_SERVER_ERROR.status_code).render('preview', {
                errHeaders: error.headers,
                complete: error.complete,
                httpVersion: error.httpVersion,
                statusCode: error.statusCode,
                statusMessage: error.statusMessage,
                stack: error.stack,
                host: req.host,
                path: req.path,
                method: req.method,
                reqHeaders: req.headers,
                originalUrl: req.originalUrl,
                params: req.params,
                query: req.query,
            });
        } else {
            next();
        }
    },

};
