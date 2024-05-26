const path = require("node:path");

// ABSOLUTE PATH

/*
    1.Path that starts from / 
*/

// RELATIVE PATH
/*
    1. that starts from ./
    2. that starts from      filename/anything

*/

/*
console.log(__filename); //    /Users/utkarsh/Desktop/NodeJs-Bootcamp/1.BasicNode/2.Module/4.PathModule/index.js
console.log(__dirname); //     /Users/utkarsh/Desktop/NodeJs-Bootcamp/1.BasicNode/2.Module/4.PathModule
*/

// extension of file
/*
console.log(path.extname("./folder/file.txt")); // .txt
console.log(path.extname(__filename)); // .js
*/

// Know MORE about File

/*
console.log(path.parse(__filename));
console.log(path.parse("./folder/file.txt"));
/*{
    root: '',
    dir: './folder',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
  }
*/

// is Path is absolute or not

/*
console.log(path.isAbsolute(__filename)); // true;
console.log(path.isAbsolute("./folder/file.txt")); // false;
console.log(path.isAbsolute(__dirname)); // true;

*/

//  ------- CREATION OF RELATIVE PATH ----------
const classs = "class";
const path1 = path.join("school", `${classs}`, "standard", "index.js"); // school/class/standard/index.js;
const path2 = path.join("school", "class", "standard", "../index.js"); // school/class/index.js;
// console.log(path2);

// -------- CREATION OF ABSOLUTE PATH ----------

const path3 = path.resolve("school", `${classs}`, "standard", "index.js"); // /Users/utkarsh/Desktop/NodeJs-Bootcamp/1.BasicNode/2.Module/4.PathModule/school/class/standard/index.js
console.log(path3);
