const express = require("express");
const router = express.Router();
const {
  author_get,
  author_new,
  author_post,
} = require("../controllers/authorsController");

router.get("/", author_get);

router.get("/new", author_new);

router.post("/", author_post);

module.exports = router;
