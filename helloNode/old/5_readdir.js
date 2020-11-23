var http = require('http')
var fs = require('fs')
var server = http.createServer()

server.on('request', function(req,res){

var url = req.url


	fs.readdir('.',function(err,data){
	
		console.log(data)

		res.end(data.toString())
})


})

server.listen(8888,function(){
	console.log("服务开启")
})

