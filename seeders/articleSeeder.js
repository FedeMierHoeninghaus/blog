const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

faker.locale = "es";

const date = new Date();
const number = faker.datatype.number({ min: 1, max: 4 });
module.exports = async () => {
  const articles = [];
  for (let i = 0; i < 100; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(9),
      username: faker.internet.userName(),
      img: "/img/bosque_" + faker.datatype.number({ min: 1, max: 2 }) + ".jpg",
      creationDate: faker.date.past(),
      authorId: faker.datatype.number({ min: 1, max: 100 }),
      commentId: faker.datatype.number({ min: 1, max: 100 }),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
