const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.json({
    message: "everything is nice",
  });
});

module.exports = router;
