var http = require("http")

function requestLinstener(req,res){
	console.log(req.url)
	res.write("www.elephant.com")
	res.end();

}

var server = http.createServer(requestLinstener)

server.listen(7798);
