module.exports = {

    addPrefix: (object, prefix) => {
        let newObject = {};
        global.each(object, (value, key) => {
            newObject[`${prefix}_key`] = value;
        });
        return newObject;
    },

    replacePrefix: (object, oldPrefix, newPrefix) => {
        let newObject = {};
        global.each(object, (value, key) => {
            let regex = new RegExp(oldPrefix);
            let str = key.replace(regex, newPrefix);
            newObject[str] = value;
        });
        return newObject;
    },

};
