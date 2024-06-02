const express = require("express");
const { supplyHome } = require("../controllers/home.controller");
const router = express.Router();

router.get("/home", supplyHome);

module.exports = router;
