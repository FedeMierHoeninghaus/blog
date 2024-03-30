const express = require("express");
const router = express.Router();
const comentController = require("../controllers/comentController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", comentController.index);
router.get("/crear", comentController.create);
router.post("/", comentController.store);
router.get("/:id", comentController.show);
router.get("/:id/editar", comentController.edit);
router.patch("/:id", comentController.update);
router.delete("/:id", comentController.destroy);

module.exports = router;
