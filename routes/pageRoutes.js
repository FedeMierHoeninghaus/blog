const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

router.get("/", pagesController.showHome);
router.get("/loguin", pagesController.showLoguin);
router.get("/signIn", pagesController.showSignIn);


module.exports = router;
