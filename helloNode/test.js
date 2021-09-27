var http = require("http")

var server = http.createServer()

server.on('request', function(request, response) {
	console.log("请求路径:" + request.url)

	response.write("Hello <nbs>"+request.toString())
	response.end("end")
})

server.listen(3000, function() {
	console.log("服务已开启")
})