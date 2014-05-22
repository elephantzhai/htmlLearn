var http = require('http')
var querystring = require('querystring')

http.createServer(function(req,res){
	console.log('请求到来,解析参数')
	var post=''
	req.on('data',function(chunk){
		post+=chunk
	})

	req.on('end',function(){
		post=querystring.parse(post)
		console.log('解析参数完成，返回name参数')
		res.end(post.name)
	})
}).listen(3000)

//客户端请求
var contents = querystring.stringify({
	name:'elephant',
	age:21,
	address:'guangzhou'
})
//声明请求参数
var options={
	host:'localhost',
	path:'/',
	port:3000,
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded',
		'Content-Length':contents.length
	}
}
//发送请求
var req = http.request(options,function(res){
	res.setEncoding('UTF-8')
	res.on('data',function(data){
		console.log('后台返回数据')
		console.log(data)
	})
})
req.write(contents)
req.end()