var fs = require("fs")

fs.readFile("context.txt",function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}

})

fs.readFile("context.txt","UTF-8",function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}

})

try{
	var data = fs.readFileSync("context.txt","UTF-8")
	console.log(data+"----")
}catch(e){
	console.log(e)
}