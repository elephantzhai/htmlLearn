var http = require('http')
var querystring = require('querystring')
var util=require('util')

http.createServer(function(req,res){
	var post=''
	req.on('data',function(chunk){
		post+=chunk
	})

	req.on('end',function(){
		//解析成真正的post为真正的post请求个事
		post = querystring.parse(post)
		//向前端返回
		res.end(util.inspect(post))
	})
}).listen(3000)