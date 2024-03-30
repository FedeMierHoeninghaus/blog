const { Article, Author } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({
    include: Author,
    order: [["creationDate", "DESC"]],
  });
  // res.render("home", { articles });
}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id, { include: Author });
  res.render("article", { article });
}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("newArticle");
}

// Store a newly created resource in storage.
async function store(req, res) {
  await Article.create(req.body);
  res.redirect("/");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const articleId = req.params.id;
  const article = await Article.findByPk(articleId);
  res.render("editArticles", { article });
}

async function update(req, res) {
  const articleId = req.params.id;
  const article = await Article.findByPk(articleId);
  await article.update(req.body);
}

async function destroy(req, res) {
  const articleId = req.params.id;
  const article = await Article.findByPk(articleId);
  await article.destroy();
  res.redirect("/");
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
