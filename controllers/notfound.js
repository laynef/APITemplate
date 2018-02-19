const {NOT_FOUND} = require('../utils/index');

module.exports = {
    notfound: (req, res) => {
        const {protocol, hostname, originalUrl, baseUrl} = req;
        res.status(NOT_FOUND.status_code).render('notfound', {
            status_code: NOT_FOUND.status_code,
            status_message: NOT_FOUND.status_meaning,
            header: 'Route Not Found',
            cardData: [
                {
                    header: `Path: ${req.path} (${NOT_FOUND.status_meaning})`,
                    data: [
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
                    ].map(e => ({...e, action: 'Searched'})),
                },
            ],
        });
    },
};
