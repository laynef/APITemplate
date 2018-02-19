const {
    INTERNAL_SERVER_ERROR,
} = require('../utils/index');
const { map } = require('lodash');

module.exports = {

    internalError: (error, req, res, next) => {
        if (error) {
            const {protocol, hostname, originalUrl, baseUrl, method, query, params} = req;
            res.status(INTERNAL_SERVER_ERROR.status_code).render('preview', {
                status_code: INTERNAL_SERVER_ERROR.status_code,
                status_message: INTERNAL_SERVER_ERROR.status_meaning,
                header: 'Internal Server Error',
                cardData: [
                    {
                        header: 'Error Call Trace',
                        data: [
                            {
                                key: 'occured',
                                value: error.stack,
                                action: 'Error',
                            },
                        ],
                    },
                    {
                        header: 'Request Headers',
                        data: map(req.headers, (value, key) => ({
                            key: key,
                            value: value,
                            action: 'Header section',
                        })),
                    },
                    {
                        header: 'Route Hit',
                        data: [
                            {
                                key: 'method',
                                value: method,
                            },
                            {
                                key: 'complete',
                                value: error.complete,
                            },
                            {
                                key: 'http version',
                                value: error.httpVersion,
                            },
                            {
                                key: 'url',
                                value: `${protocol}://${hostname}${originalUrl}`,
                            },
                            {
                                key: 'protocol',
                                value: protocol,
                            },
                            {
                                key: 'host name',
                                value: hostname,
                            },
                            {
                                key: 'base url',
                                value: baseUrl,
                            },
                            {
                                key: 'path',
                                value: req.path,
                            },
                            {
                                key: 'query',
                                value: map(query, (e, i) => `${i}: ${e}`).join(', '),
                            },
                            {
                                key: 'params',
                                value: map(params, (e, i) => `${i}: ${e}`).join(', '),
                            },
                        ].map(e => ({...e, action: 'Searched'})),
                    },
                ],
            });
        } else {
            next();
        }
    },

};
