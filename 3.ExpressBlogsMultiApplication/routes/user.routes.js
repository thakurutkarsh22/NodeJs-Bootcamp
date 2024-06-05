const express = require("express");
const { supplyHome } = require("../controllers/home.controller");
const { createUser } = require("../controllers/user.controller");
const {
  userCreationMiddlewareValidation,
} = require("../middlewares/userCreationMiddleware");
const router = express.Router();

router.get("/home", supplyHome);

// CRUD

router.post("/createUser", userCreationMiddlewareValidation, createUser);

module.exports = router;
