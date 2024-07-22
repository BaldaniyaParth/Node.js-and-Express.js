const express = require("express");
const path = require("path");

const app = express();

const port = 8000;


// Static page add
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));


// set the ejs in view engine and ejs not import beacuse express inclued ejs
app.set("view engine", "ejs");

// set the views so anyother out of folder thow run so not error show
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req,res) => {
    res.render("home.ejs")
})

app.get("/:username", (req,res) => {
    let {username }  = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]
    if(data){
        res.render("instagram.ejs", {data})
    }else{
        res.render("error.ejs")
    }
    

})


app.listen(port, () => {
    console.log(`Server running port : ${port}`)
})