const express = require("express");

const usersController = require("../controllers/authController");

const router = express.Router();


router.post("/signup", usersController.signup);
router.post("/login", usersController.loginuser);

module.exports = router;
