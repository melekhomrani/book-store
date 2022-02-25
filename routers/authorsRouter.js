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
  let id = req.params.id;
  try {
    const auth = await authorModel.findById(id);
    res.render("authors/authorDetails", { author: auth });
  } catch (error) {
    console.log("there is an error");
  }
});

router.get("/new", author_new);

router.post("/", author_post);

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  await authorModel
    .findByIdAndDelete(id)
    .then(res.json({ redirect: "/authors" }))
    .catch((e) => console.log(e));
});

module.exports = router;
