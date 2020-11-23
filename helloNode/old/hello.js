var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.setHeader('Content-Type','text/html; charset=utf-8');

    // 发送响应数据 "Hello World"
    // response.setHeader('charset=utf-8')
    response.end('<h1>Hello World 你好世界</h1>\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');