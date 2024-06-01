// THIS WOULD OUR MAIN SERVER
// CREATE SERVER AND LISTEN TO PORT

// ------- IMPORTS -----

const express = require("express");
const server = express();
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const userRoute = require("./routes/user.routes");

// ------- MIDDLEWARES -------

// -------- ROUTES REGISTRATION -------

server.use("/api/v1", userRoute);

// --------- DATABASE CONNECTION --------

server.listen(8080, () => {
  console.log("Server working at port 8080");
});
