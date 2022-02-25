const authorModel = require("../models/authorModel");

async function author_get(req, res) {
  let searchOption = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOption.name = new RegExp(req.query.name, "i");
  }
  try {
    const auth = await authorModel.find(searchOption);
    res.render("authors/index", { authors: auth });
  } catch {
    console.log("cannot get all authors from db");
  }
}
function author_new(req, res) {
  res.render("authors/new", { author: new authorModel() });
}
async function author_post(req, res) {
  const auth = new authorModel({
    name: req.body.name,
  });
  await auth
    .save()
    .then(() => {
      res.redirect(`authors`);
      console.log("author added");
    })
    .catch((e) => {
      res.render("authors/new", {
        authors: auth,
        errorMessage: "eeeeeeeeeeror",
      });
      console.log(e);
    });
}

module.exports = {
  author_get,
  author_new,
  author_post,
};
