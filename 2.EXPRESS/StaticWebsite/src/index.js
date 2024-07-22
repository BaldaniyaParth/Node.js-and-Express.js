const express = require("express");
const path = require("path");

const app = express();

const port = 8000;


// buit middleware
const staticPath = path.join(__dirname, "../public"); 

app.use(express.static(staticPath));



app.listen(port, () => {
    console.log(`Running server port : ${port}`)
})