const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

//Check if port is in use before starting the server
const checkPortInUse = (port, callback) => {
    const server = http.createServer();
    server.once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            return callback(true);
        }
        return callback(false, err);
    });
    server.once('listening', () => {
        server.close();
        callback(false);
    });
    server.listen(port);
};

checkPortInUse(port, (isInUse, err) => {
    if (err) {
        console.error('Error checking port:', err);
        process.exit(1);
    }
    if (isInUse) {
        console.error(`Port ${port} is already in use. Please choose a different port.`);
        process.exit(1);
    } else {
        server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
});