const Express = require('express');
const spdy = require('spdy');
const http = require('http');
const {MOVED_PERMANENTLY} = require('./utils/index');

// Express servers
const app = new Express();

const server = spdy.createServer({

}, app);

http.createServer((req, res) => {
    res.writeHead(MOVED_PERMANENTLY.status_code, {'Location': 'https://' + req.headers.host + req.url});
    res.end();
}).listen(8080);

server.listen(8443, (error) => {
    if (error) {
        console.error(error);
    }
});
