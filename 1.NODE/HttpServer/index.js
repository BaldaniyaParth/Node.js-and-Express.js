const http = require("http");

const server = http.createServer( (req, res) => {
    if(req.url == "/"){
        res.end("Hello! How are you?");
    }else if(req.url == "/about"){  
        res.end("This is about page");
    }else if(req.url == "/contact"){
        res.end("This is contact page")
    }else{
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end("<h1>404 Worng page</h1>")
    }
    
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listening on port number 8000");
})