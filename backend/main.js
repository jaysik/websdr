// import http to handling http requests
const http = require('http');
const { checkEnvVariables } = require('./tools/systemCheck.js');
const { DATABASE } = require('../settings.js');

// System check
checkEnvVariables();


// Configuration for node.js server
// TODO: Create a settings page for ease of use for user.
const hostname = DATABASE.host;
const port = DATABASE.port;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello WebSDR backend server!");
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})

