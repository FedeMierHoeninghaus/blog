const { Article, Author, Comment, User } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({
    include: [{ model: Author }, { model: Comment, include: [{ model: User }] }],
    order: [["creationDate", "DESC"]],
  });
  res.render("home", { articles });
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}
async function showLoguin(req, res) {
  res.render("loguin");
}

async function showSignIn(req, res) {
  res.render("signIn");
}
module.exports = {
  showHome,
  showContact,
  showAboutUs,
  showLoguin,
  showSignIn,
};
