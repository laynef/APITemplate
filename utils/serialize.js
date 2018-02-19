module.exports = {

    getDataValues: (response) => {
        if (!response) return {};
        let fetch = (data, collection, model = '') => {
            global.map((val, key) => {
                if (val.dataValues) {
                    fetch(data, val.dataValues, `${model}${key.toLowerCase()}_`);
                } else {
                    data[`${model}${key}`] = val;
                }
            });
            return data;
        };
        return fetch({}, response);
    },

    whiteList: (...args) => {
        return global.pick(...args);
    },

    blackList: (...args) => {
        return global.omit(...args);
    },

};
