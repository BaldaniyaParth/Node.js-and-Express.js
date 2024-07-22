const express = require("express");

const app = express();

const port = 8000;

// json formate post methof use and store the value so use this 
app.use(express.json());
// url encode use and that value store so use this
app.use(express.urlencoded("extends : true"));


// get value accept
app.get("/request", (req,res) => {
    const {username, password} = req.query;
    res.send(`Accepted GET Request ${username} and ${password}`)
})


// post value accept
app.post("/request", (req,res) => {
    const {username, password} = req.body;
    res.send(`Accepted POST Request ${username} and ${password}`)
})


app.listen(port, () => {
    console.log("Server Running")
})