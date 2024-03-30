require("dotenv").config();

async function runAllSeeders() {
  await require("./userSeeder")();
  await require("./authorSeeder")();
  await require("./articleSeeder")();
  await require("./commentSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
