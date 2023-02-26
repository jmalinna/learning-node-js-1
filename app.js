const http = require('http');
const fs = require('fs');

function requestListener(request, response) {
  const URL = request.url;
  const method = request.method;

  if (URL === '/') {
    response.write('<html>');
    response.write('<head><title>Enter message</title></head>');
    response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button</form></body>');
    response.write('</html');

    return response.end();
  }

  if (URL === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'test');
    response.writeHead(302, {
      'Location': '/'
    });

    return response.end();
  }

  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My first page</title></head>');
  response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  response.write('</html');

  response.end();
}

const server = http.createServer(requestListener);
server.listen(3000);