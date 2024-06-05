// THIS WOULD OUR MAIN SERVER
// CREATE SERVER AND LISTEN TO PORT

// ------- IMPORTS -----

const express = require("express");
const server = express();
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const userRoute = require("./routes/user.routes");
const cors = require("cors");

// ------- MIDDLEWARES -------
dotEnv.config();
server.use(express.json());
server.use(cors()); // this is for When you deploy

// // -------- ROUTES REGISTRATION -------

server.use("/api/v1/user", userRoute);

// --------- DATABASE CONNECTION --------

// const connectionString = "mongodb://localhost:27017"; // DANGEROUS ...
const connectionString = process.env.DATABSE_URI; // nice apprach

mongoose
  .connect(connectionString + "/FyndAcademy")
  .then(() => {
    console.log("DB IS CONNECTED");
  })
  .catch(() => {
    console.log("ERRROR in cennection to DB");
  });

server.listen(8080, () => {
  console.log("Server working at port 8080");
});
