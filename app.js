const http = require('http');

function requestListener(request, response) {
  console.log(request.url, request.method, request.headers);
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My first page</title></head>');
  response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  response.write('</html');

  response.end();
}

const server = http.createServer(requestListener);
server.listen(3000);