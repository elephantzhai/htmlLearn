var fs = require('fs')
var data = fs.readFileSync('file.txt','UTF-8')
console.log(data)
console.log('end')