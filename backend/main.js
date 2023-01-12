// import http to handling http requests
const http = require('http');


// Configuration for node.js server
// TODO: Create a settings page for ease of use for user.
const hostname = '127.0.0.1';

const port = process.env.DATABASE_PORT;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello WebSDR backend server!");
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})

