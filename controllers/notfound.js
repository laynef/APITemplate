const {NOT_FOUND} = require('../utils/index');

module.exports = {
    notfound: (req, res) => {
        res.status(NOT_FOUND.status_code).render('notfound');
    },
};
