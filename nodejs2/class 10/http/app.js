var http = require('http')

var server=http.createServer(function(req,res){
	console.log(req.url);
	//响应头
	res.writeHead(200,{'Content-Type':'text/html'})
	//相应内容
	res.write('<h1>Node.js</h1>')
	//结束响应
	res.end('<p>PCAT</p>')
})
server.listen(3000)
server.on('close',function(){
	console.log('server is close')
})
server.close()
console.log('HTTP server is listening at port 3000');
