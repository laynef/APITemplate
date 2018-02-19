module.exports = {

    addPrefix: (objectOrArray, prefix) => {
        if (Array.isArray(objectOrArray)) {
            return objectOrArray.map(e => {
                let newObject = {};
                global.each(e, (value, key) => {
                    newObject[`${prefix}_key`] = value;
                });
                return newObject;
            });
        } else {
            let newObject = {};
            global.each(objectOrArray, (value, key) => {
                newObject[`${prefix}_key`] = value;
            });
            return newObject;
        }
    },

    replacePrefix: (objectOrArray, oldPrefix, newPrefix) => {
        if (Array.isArray(objectOrArray)) {
            return objectOrArray.map(e => {
                let newObject = {};
                global.each(e, (value, key) => {
                    let regex = new RegExp(oldPrefix);
                    let str = key.replace(regex, newPrefix);
                    newObject[str] = value;
                });
                return newObject;
            });
        } else {
            let newObject = {};
            global.each(objectOrArray, (value, key) => {
                let regex = new RegExp(oldPrefix);
                let str = key.replace(regex, newPrefix);
                newObject[str] = value;
            });
            return newObject;
        }
    },

};
