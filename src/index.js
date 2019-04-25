const http = require('http');
const sockjs = require('sockjs');

const echo = sockjs.createServer({ prefix:'/echo' });
echo.on('connection', function(conn) {
  conn.on('data', function(message) {
    conn.write(message);
  });
  conn.on('close', function() {});
});

const server = http.createServer();
echo.attach(server);
server.listen(8080, '0.0.0.0');