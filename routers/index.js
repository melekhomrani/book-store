const express = require("express");
const router = express.Router();
const authorRouter = require("./authorsRouter");

//
router.get("/", (req, res) => {
  res.render("index");
});

router.use("/authors", authorRouter);
//
module.exports = router;
