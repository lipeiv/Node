var os = require('os')
var path = require('path')
var date = new Date()

console.log(date.toLocaleString())
console.log(os.platform())
console.log(path.extname("hello.js"))