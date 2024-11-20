const { Article, Author, Comment, User } = require("../models");

async function showHome(req, res) {
    const articles = await Article.findAll({
        include: Author,
        order: [["creationDate", "DESC"]],
    });
    const limitedArticles = articles.slice(0, 20);
    res.render("home", { articles: limitedArticles });
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
