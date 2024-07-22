const http = require("http");
const isPalindrome = require("./palindrome");

const server = http.createServer( (req, res) => {
    if (req.url === "/checkPalindrome" && req.method === "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });

       
        req.on("end", () => {
            const data = JSON.parse(body);

            const { text } = data; // Assuming the request body contains a JSON object with a key "text"
            
            // Check if the provided text is a palindrome
            const result = isPalindrome(text);

            // Send back the result
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ isPalindrome: result }));
        });
    }else if(req.url === "/checkPalindrome" && req.method === "POST"){

        // logic
        

    }else{
        res.writeHead(404, {"Content-type" : "application/text"})
        res.end("Not Found")
    }
    
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listening on port number 8000");
})