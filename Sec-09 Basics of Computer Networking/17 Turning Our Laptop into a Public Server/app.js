const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end('{"message": "Hello, From Hameed!"}');
});

server.listen(8080, '0.0.0.0', () => {
  console.log("HTTP server is running on http://localhost:8080");
});