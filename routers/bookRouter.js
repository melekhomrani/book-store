const express = require("express");
const router = express.Router();
const bookModel = require("../models/bookModel");

router.get("/", (req, res) => {
  //
  res.render("books/index", { books: [{ name: "test book " }] });
});

router.get("/new", (req, res) => {
  //
  res.send("hello");
});

router.post("/", (req, res) => {
  //
  res.send("hello");
});

module.exports = router;
