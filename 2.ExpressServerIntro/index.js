const express = require("express");

const server = express();

// MIDDLEWARE NEEDED ...
/*
Middleware that will PARSE EVERY REQUEST and then forward the request to 
 route handlers
 */

//  I have not given any url to server.use -> so that I can handle for any ROUTE
server.use(express.json());

// HOME ROUTE

// use -> GET, PUT, POST, DELETE, .....
/*
server.use("/", (req, res) => {
  res.end("WELCOME TO HOME PAGE EXPRESS APP");
});
*/

server.get("/", (req, res) => {
  res.end("WELCOME TO THE HOME PAGE");
});

// --------- HANDLE QUERY PARAMS -----------

server.get("/fitness", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);

  const { type } = queryParams;

  if (type === "gym") {
    res.end("fitness WELCOME TO THE GYM AND EQUIPMENT ");
  } else {
    res.end("fitness :::: " + queryParams.type);
  }
});

// ------------ HANDLE PARAMS -------------

server.get("/sport/:id", (req, res) => {
  const id = req.params["id"];

  res.end("PRODUCT ::: " + id);
});

// ----------- HANDLE THE BODY -----------

server.post("/register/", (req, res) => {
  const body = req.body;
  const url = req.url;
  const method = req.method;
  const { name } = body;

  res.end("REGISTERED SUCCESSFULLY ::: WELCOME " + name);
});

server.listen(8081, () => {
  console.log("Port working on 8081");
});
