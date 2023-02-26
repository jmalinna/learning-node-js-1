const http = require('http');

function requestListener(request, response) {
  console.log(request.url, request.method, request.headers);
}

const server = http.createServer(requestListener);
server.listen(3000);