const _ = require('lodash');

module.exports = {

    makeGlobalAPILodashFunctions: (array) => {
        array.forEach(e => {
            global[e] = _[e].bind(this);
        });
    },

};
