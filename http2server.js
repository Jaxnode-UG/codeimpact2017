// Note: Node.js must be launched with the --expose-http2 command line flag in order to use the 'http2' module.
const http2 = require('http2');
const fs = require('fs');

// Create a plain-text HTTP/2 server
const server = http2.createServer();
//const server = http2.createSecureServer({ key: fs.readFileSync('server.key'), cert: fs.readFileSync('server.crt') });

server.on('stream', (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});

server.listen(3000);
