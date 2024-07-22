const express = require("express");
const sendMail = require("./sendMail");

const port = 5000;

const app = express();

app.get("/", (req,res) => {
    res.send("This is Server");
})

app.get("/mail", sendMail);

app.listen(port, () => {
    console.log(`server running port : ${port}`);
})