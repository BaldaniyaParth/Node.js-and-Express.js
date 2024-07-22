const fs = require("fs");

// fs.mkdir("Parth", (err) => {
//     console.log("Folder Create");
// });

// fs.writeFile("Parth/bio.txt", "Hello! How are you? ", (err) => {
//     console.log("File Create");
//     console.log(err);
// })

// fs.appendFile("Parth/bio.txt", " I am Fine. ", (err) => {
//     console.log("Add more content");
//     console.log(err);
// })

// fs.readFile("Parth/bio.txt", "utf-8", (err, data) => {
//     console.log(data);
//     console.log(err);
// })

// fs.rename("Parth/bio.txt", "Parth/myBio.txt", (err) => {
//  console.log("Rename the file");
//  console.log(err);
// })

// fs.unlink("Parth/myBio.txt", (err) => {
//  console.log("Delete file");
//  console.log(err);
// })

fs.rmdir("Parth", (err) => {
    console.log("Delete Folder");
    console.log(err)
})