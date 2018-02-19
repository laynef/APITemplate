const morgan = require('morgan');
const compression = require('compression');
const parser = require('body-parser');

module.exports = {

    morgan: morgan('dev'),
    json: parser.json(),
    compression: compression({ level: 9 }),

};
