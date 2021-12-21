var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
	url = req.url
	if (url==='/') {
		res.end("index page")
	}else if(url === '/login'){
		res.end('login')
	}else{
		res.end('404 not found')
	}
})



server.listen(80,function(){
	console.log('服务器启动成功了')
})