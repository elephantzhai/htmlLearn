var http = require("http")
var server = http.createServer(function(req, res) {
	console.log(req.method)
	console.log(req.url)

	if (req.method === "GET") {
		switch (req.url) {
			case "/index.html":
			case "/":
				var html = "<html><head><meta charset = 'utf8'/><title>elephant</title><body>" +
					"<h1>eat</h1>"+
					"<a href = '/add.html'>Add</a> " +
					"<a href = '/remove.html'>Remove</a> " +
					"<a href = '/find.html'>Find</a> " +
					"<a href = '/edit.html'>Edit</a> " +
					"</body></html>"

				res.setHeader("Content-Type", "text/html")
				res.setHeader("Content-Encoding", "utf8")
				res.end(html)
				break

			case "/add.html":
				break

			case "/remove.html":
				break

			case "/find.html":
				break

			case "/edit.html":
				break

			default:
				console.log("invalid request" + req.url)
				res.end()
		}
	}
})

server.listen(7798)