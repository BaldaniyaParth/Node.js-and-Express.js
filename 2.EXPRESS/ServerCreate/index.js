const express = require("express");

const app = express();

const PORT = 8000;



// Difine port which port run

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})



// request accept and send response

// app.use( (req, res) => {
//     console.log(req)
//     console.log("request Create");

    // res.send("<h1>Your Request Accept</h1>");

    // res.send({
    //     name: "Parth",
    //     age : 21
    // });

//     res.send("This is object");
// })



// Routing
// request accept and send response using GET method

app.get("/", (req,res) => {
    res.send("This is Root path")
})

// app.get("/about", (req,res) => {
//     res.send("This is About path")
// })

// app.get("/contact", (req,res) => {
//     res.send("This is Contact path")
// })

// app.get("*", (req,res) => {
//     res.send("Worng path")
// })



// Routing
// request accept and send response using POST method

app.post("/about", (req,res) => {
    res.send("This is About path")
})



// Path Parameter

app.get("/:username/:id", (req,res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to @${username} and ${id}</h1>`;
    res.send(htmlStr);
})



// Quary String

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing Search</h1>`);
    }
    res.send(`<h1>Your Search is ${q}</h1>`);
})



// Multuple HTML Write

app.get("/html", (req,res) => {
    res.write("<h1>Hello</h1>");
    res.write("<h1>How are you?</h1>");
    res.write("<h1>Keep up</h1>");
    res.send();
})



