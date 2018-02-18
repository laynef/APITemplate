const Express = require('express');
const spdy = require('spdy');
const http = require('http');
const {
    MOVED_PERMANENTLY,
    makeGlobalAPILodashFunctions,
} = require('./utils/index');
const fs = require('fs');
const middleware = require('./middleware/index');
const routes = require('./routes/index');

// global functions
makeGlobalAPILodashFunctions([
    'extend',
    'defaults',
    'omit',
    'pick',
]);

// Express servers
const app = new Express();
app.set();
app.use(middleware);
app.use(routes);

const server = spdy.createServer({
    key: fs.readFileSync('openssl/demo-key.pem'),
    cert: fs.readFileSync('openssl/demo-cert.pem'),
    ca: fs.readFileSync('openssl/demo-csr.pem'),
    dhparam: fs.readFileSync('openssl/demo-dh.pem'),
    secureOptions: 'SSL_OP_NO_SSLv3' | 'SSL_OP_NO_SSLv2',
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
