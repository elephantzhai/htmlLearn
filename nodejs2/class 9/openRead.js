var fs = require("fs")
fs.open('context.txt','r',function(err,fd){
	if(err){
		console.log(err)
	}

	buf = new Buffer(8)
	fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
		if(err){
			console.log(err)
		}
		console.log('byteRead '+bytesRead)
		console.log(buf)
		console.log(buffer)
	})
})