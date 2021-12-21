require("./7cpu.js");

var http = require("http");

var server = http.createServer();

server.on("request", function (request, response) {
  console.log("收到客户端请求了" + request.url);
  response.write("hello");
  response.end();
});

server.listen(8000, function () {
  console.log("服务器启动成功了");
});
