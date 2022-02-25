const express = require("express");
const router = express.Router();
const authorRouter = require("./authorsRouter");
const bookRouter = require("./bookRouter");

router.get("/", (req, res) => {
  res.render("index");
});

router.use("/authors", authorRouter);
router.use("/books", bookRouter);

router.use((req, res) => {
  let context = { title: "Error" };
  res.status(404).render("404", context);
});
//
module.exports = router;
