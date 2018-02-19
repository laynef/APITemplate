module.exports = {

    getDataValues: (response) => {
        let fetch = (data, collection, model = '') => {
            global.map((val, key) => {
                if (val.dataValues) {
                    fetch(data, val.dataValues, `${key.toLowerCase()}_`);
                } else {
                    data[`${model}${key}`] = val;
                }
            });
            return data;
        };
        return fetch({}, response);
    },

};
