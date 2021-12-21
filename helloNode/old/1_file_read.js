var fs = require("fs");

fs.readFile("hello.js", function (error, data) {
  if (error) {
    console.log("文件读取失败");
  } else {
    console.log("成功");
  }
});

fs.writeFile("你好.js", "大家好，我是node.js", function (data) {
  console.log(data);
});
