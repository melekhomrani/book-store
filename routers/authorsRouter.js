const express = require("express");
const router = express.Router();
const {
  author_get,
  author_new,
  author_post,
  author_get_id,
} = require("../controllers/authorsController");
const authorModel = require("../models/authorModel");

router.get("/", author_get);

router.get("/:id", async (req, res) => {
  try {
    const auth = await authorModel.find({ _id: req.params.id });
    await res.render("authors/authorDetails", { author: auth });
  } catch (error) {
    console.log("there is an error");
  }
});

router.get("/new", author_new);

router.post("/", author_post);

module.exports = router;
