const {OK} = require('../utils/index');

module.exports = {

    docs: (allRoutes) => (req, res) => {
        res.status(OK.status_code).render('docs', {
            routes: allRoutes.map(e => ({
                ...e,
                data: typeof e.controller(req, res, true) === 'object' ? JSON.stringify(e.controller(req, res, true), null, 2) : JSON.stringify({error: 'Not Available'}, null, 2),
            })),
        });
    },

};
