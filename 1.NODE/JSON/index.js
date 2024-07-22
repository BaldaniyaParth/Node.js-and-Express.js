const fs = require("fs");

const student = {
    name : "Parth",
    age : 21,
    email : "parthbaldaniya35678@gmail.com"
}

const jsonData = JSON.stringify(student);

// fs.writeFile("data.json", jsonData, (err) => {
//     console.log("done");
// })

fs.readFile("data.json", "utf-8", (err, data) => {
    console.log(data);
    const orignalData = JSON.parse(data);
    console.log(orignalData);
})