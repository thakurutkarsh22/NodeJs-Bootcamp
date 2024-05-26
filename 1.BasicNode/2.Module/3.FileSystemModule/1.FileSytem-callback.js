const fs = require("node:fs");

// ----------------------- ASYNC VERSION of fs -------------------

// ------------ CREATE ----------

/*
fs.appendFile(
  "./folder/file.txt",
  "hey there welcome to my website",
  (error, data) => {
    if (error) {
      console.log(error, "error file creation");
    } else {
      console.log("file created success");
    }
  }
);
*/

// ------------ READ ----------

/*
fs.readFile("./folder/file.txt", (error, data) => {
  if (error) {
    console.log(error, "error file reading");
  } else {
    // data is in BUFFER FORMAT.
    console.log(data);

    // convert Buffer to String (VISIBLE FORMAT).
    console.log(data.toString());
  }
});
*/

// ------------ UPDATE ----------
/*
fs.appendFile(
  "./folder/file.txt",
  "\nthis is the second line",
  (error, data) => {
    if (error) {
      // handling of error
      console.log(error, "error file update");
    } else {
      console.log("file updated success");
    }
  }
);
*/

// ------------ DELETE ----------

/*
fs.unlink("./folder/file.txt", (error) => {
  if (error) {
    console.log("error while deleting file", error);
  } else {
    console.log("file deleted successfully");
  }
});

*/

// ------------------ Async -----------

/*
console.log("a");

fs.readFile("./folder/file.txt", (error, data) => {
  console.log("c");
});

console.log("b");
*/

// ------------- SYNC  -----------

/*
console.log("a");

const data = fs.readFileSync("./folder/file.txt");
console.log(data);
console.log(data.toString());

console.log("b");

*/

// TODO: Streams PIPES ...
// ENCODING..
