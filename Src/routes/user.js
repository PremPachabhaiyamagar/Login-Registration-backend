const express = require("express");
const router = express.Router();

const Register = require("../controller/register");
const login = require("../controller/login");

router.post("/login", login);
router.post("/register", Register);

module.exports = router;
