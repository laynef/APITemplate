const {map} = require('lodash');

module.exports = {

    errorPreview: (error, req, res) => {
        const {protocol, hostname, originalUrl, baseUrl, method, query, params} = req;
        res.status(error.status).render('preview', {
            status_code: error.status,
            status_message: error.message,
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
    },

};
