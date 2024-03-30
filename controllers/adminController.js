const { Article, Author } = require("../models");

async function index(req, res) {
  const articles = await Article.findAll({
    include: Author,
    order: [["creationDate", "DESC"]],
  });
  res.render("adminPanel", { articles });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("newArticle");
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

async function destroy(req, res) {
  const articleId = req.params.id;
  const article = await Article.findByPk(articleId);
  await article.destroy();
  res.redirect("/admin");
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
