const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  },
);

const User = require("./User");
const Author = require("./Author");
const Comment = require("./Comment");
const Article = require("./Article");

User.initModel(sequelize);
Comment.initModel(sequelize);
Article.initModel(sequelize);
Author.initModel(sequelize);

Article.belongsTo(Author);
Author.hasMany(Article);
Comment.belongsTo(User);
User.hasMany(Comment);
Comment.belongsTo(Article);
Article.hasMany(Comment);

module.exports = {
  sequelize,
  User,
  Comment,
  Article,
  Author,
};
