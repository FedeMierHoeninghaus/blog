const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];
  for (let i = 0; i < 300; i++) {
    comments.push({
      content: faker.lorem.sentences(faker.datatype.number({ min: 1, max: 5 })),
      articleId: faker.datatype.number({ min: 1, max: 100 }),
      userId: faker.datatype.number({ min: 1, max: 100 }),
    });
  }
  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comment.");
};
