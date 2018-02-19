module.exports = {

    errorHandling: (error) => {
        let object = {message: error.message, name: error.name};
        console.error(object);
        switch (error.name) {
        case 'SequelizeEmptyResultError':
            return global.extend(object, { empty: true });
        case 'TypeError':
            return global.extend(object, { empty: true });
        case 'AccessDeniedError':
            return global.extend(object, { forbidden: true });
        default:
            return object;
        }
    },

};
