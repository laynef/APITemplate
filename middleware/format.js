const morgan = require('morgan');
const compression = require('compression');
const parser = require('body-parser');

module.exports = {

    morgan: morgan('dev'),
    json: parser.json(),
    raw: parser.raw(),
    urlencoded: parser.urlencoded({ extended: false }),
    compression: compression({ level: 9 }),

};
