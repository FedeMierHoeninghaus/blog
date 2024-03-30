const { faker } = require("@faker-js/faker");
const { Author } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const author = [];
  for (let i = 0; i < 100; i++) {
    author.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: 1234,
    });
  }

  await Author.bulkCreate(author);
  console.log("[Database] Se corrió el seeder de Author.");
};
