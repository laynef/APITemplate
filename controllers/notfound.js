const {NOT_FOUND} = require('../utils/index');

module.exports = {
    notfound: (req, res) => {
        res.status(NOT_FOUND.status_code).render('notfound', {
            status_code: NOT_FOUND.status_code,
            path: req.path,
            protocol: req.protocol,
            hostname: req.hostname,
            baseUrl: req.baseUrl,
            originalUrl: req.originalUrl,
            status_message: NOT_FOUND.status_meaning,
        });
    },
};
