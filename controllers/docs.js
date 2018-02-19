const {OK} = require('../utils/index');

module.exports = {

    docs: (allRoutes) => (req, res) => {
        res.status(OK.status_code).render('docs', {

        });
    },

};
