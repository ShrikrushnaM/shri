const FileSystem = require("fs");
// // const book = {
// //   title: "Ego is the enemy",
// //   author: "Rayan",
// // };

// // const bookJson = JSON.stringify(book);
// // // console.log(bookJson);
// // // const parse = JSON.parse(bookJson);
// // // console.log(parse.title);

// // FileSystem.writeFileSync("1joson.json", bookJson);
// const buffer = FileSystem.readFileSync('1-joson.json')

// const dataJson= buffer.toString()
// const data= JSON.parse(buffer)
// console.log(data.title)

const dataBuffer = FileSystem.readFileSync("1-joson.json");
const dataParse = JSON.parse(dataBuffer);

dataParse.name = "Gunther";
dataParse.age = 52;

const userJson = JSON.stringify(dataParse);
FileSystem.writeFileSync("1-joson.json", userJson);
