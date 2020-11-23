var fs = require("fs")

fs.open("input.txt", 'r+', function(err, data){
	if(err){
		console.log("err");
	}
	console.log("文件打开成功")
})

fs.writeFile("input.txt", "我是准备写入的文件",  function(err){
	console.log(err)
})

fs.stat('input.txt',function(err, stat){
	console.log("文件创建时间：", stat.birthtime);
	console.log("文件修改时间：", stat.mtime);
})


fs.readFile('input.txt',function(err,data){
	if(err){
		return console.log("异步读取文件错误：" +err);
	}
	console.log("异步读取文件：" + data.toString());

});

try{
	var data = fs.readFileSync('inputt.txt');
	console.log("同步读取：" + data.toString());
}catch(err){
	console.log("同步读取文件错误：", err);
}finally{
	console.log("同步读取完成");
	// process.exit(1);
}

console.log("程序执行完毕！")