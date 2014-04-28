var http = require("http")
var fs = require("fs")

var app = http.createServer(function(req,res){
	if (req.method = "GET"){
		switch(req.url){
			case "/index":
			case "/":
			fs.readFile("Index.html",function(err,data){
				if(err) throw err
				// res.writeHeader(200,{"Content-Type":"test/html"})
				res.write(data.toString())
				res.end()
			})
			break

			case "/Add.html":
			fs.readFile("Add.html",function(err,data){
				if(err) throw err
				// res.writeHeader(200,{"Content-Type":"test/html"})
				res.write(data.toString())
				res.end()
			})
			break

			case "/Remove.html":
			fs.readFile("Remove.html",function(err,data){
				if(err) throw err
				// res.writeHeader(200,{"Content-Type":"test/html"})
				res.write(data.toString())
				res.end()
			})
			break

			case "/Find.html":
			fs.readFile("Find.html",function(err,data){
				if(err) throw err
				// res.writeHeader(200,{"Content-Type":"test/html"})
				res.write(data.toString())
				res.end()
			})
			break

			case "/Edit.html":
			fs.readFile("Edit.html",function(err,data){
				if(err) throw err
				// res.writeHeader(200,{"Content-Type":"test/html"})
				res.write(data.toString())
				res.end()
			})
			break

			
		}
	}else{
		console.log("Not supported!")
	}
})

app.listen(7798)