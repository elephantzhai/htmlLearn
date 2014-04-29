var http = require("http")
var fs = require("fs")
var qs = require("querystring")

var app = http.createServer(function(req,res){
	var postData = ""
	if(req.method === "GET"){
		switch(req.url){
			case "/index.html":
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

	}
	else if(req.method === "POST"){
		switch(req.url){
			case "/Add.js":
			req.on("data",function(chunck){
				postData += chunck

			})

			req.on("end",function(){
				var website = qs.parse(postData)
				console.log(website.domainName);
				console.log(website.name);
				console.log(website.email);
				console.log(website.age);
				console.log(website.cilck);
				res.end(postData)
			})
			break;
		}
	}
})

app.listen(7798)