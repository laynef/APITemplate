const sequelize = require('sequelize');

module.exports = {

    patchReturns: (response) => {
        if (response[1] && response[1][0] && response[1][0].dataValues) {
            return response[1][0].dataValues;
        } else {
            return false;
        }
    },

    params: (req, others, defaults = 'created_at DESC') => {
        const { offset, limit, order, sort } = req.query;
        let newLimit = limit || 25;
        let newOffset = offset || 0;
        let temp = others;
        return global.defaults(temp, {
            offset: newOffset * newLimit,
            limit: newLimit,
            order: order && sort ? `${order} ${sort.toUpperCase()}` : defaults,
            where: null,
            include: [],
        });
    },

    queryArray: (str) => {
        return str.split(',');
    },

    returnPagination: (response, cb) => {
        return response.rows.reduce((acc, item) => {
            let serial = item.dataValues;
            return cb(acc, serial);
        }, { count: response.count, data: [] });
    },

    hasManyIncludes: (model, order = 'created_at DESC', limit = 5, include = {}) => ({
        model: model,
        order: order,
        limit: limit,
        include: include,
        attributes: [
            [sequelize.fn('COUNT', `${model.name}.id`), 'count'],
        ],
    }),

};
