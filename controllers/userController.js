const { User } = require("../models");
const { findByPk } = require("../models/User");

async function index(req, res) {
  const users = await User.findAll();
  res.json(users);
}

async function show(req, res) {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  res.render("userUpdate", { userId, user });
}

async function create(req, res) {
  res.render("signIn");
}

async function store(req, res) {
  await User.create(req.body);
}

async function edit(req, res) {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  res.render("userUpdate", { userId, user });
}

async function update(req, res) {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  await user.update(req.body);

  console.log("le pegamos a update");
}

async function destroy(req, res) {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  await User.destroy(user);
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
