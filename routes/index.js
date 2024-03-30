const userRoutes = require("./userRoutes");
const articleRoutes = require("./articleRoutes");
const commentRoutes = require("./commentRoutes");
const pageRoutes = require("./pageRoutes");
const adminRoutes = require("./adminRoutes");
module.exports = (app) => {
  app.use("/", pageRoutes);
  app.use("/loguin", pageRoutes);
  app.use("/usuarios", userRoutes);
  app.use("/articulos", articleRoutes);
  app.use("/comentarios", commentRoutes);
  app.use("/admin", adminRoutes);
};
