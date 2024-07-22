const fs = require("fs");

const http = require("http");

const server = http.createServer( (req,res) => {
    const rstrem = fs.createReadStream("data.txt");

    // rstrem.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // })

    // rstrem.on("end", () => {
    //     res.end();
    // })

    // rstrem.on("error", (err) => {
    //     res.end(err)
    // })


    rstrem.pipe(res)
});

server.listen(8000, "127.0.0.1");