function author_get(req, res) {
  res.render("authors/index");
}
function author_new(req, res) {
  res.render("authors/new");
}
function author_post(req, res) {
  res.send("this is author post");
}

module.exports = {
  author_get,
  author_new,
  author_post,
};
