const {...httpResponses} = require('./httpResponses');
const {...globals} = require('./globals');
const {...prefixers} = require('./prefixers');
const {...preview} = require('./preview');
const {...serialize} = require('./serialize');
const {...queries} = require('./queries');
const {...errorHandling} = require('./errorHandling');
const {...responses} = require('./responses');

module.exports = {
    ...httpResponses,
    ...globals,
    ...prefixers,
    ...preview,
    ...serialize,
    ...queries,
    ...errorHandling,
    ...responses,
};
