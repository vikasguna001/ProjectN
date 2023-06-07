var express = require("express");
var router = express.Router();
const api = require("../controller/UserController");

router.post("/register", api.registerUser);
router.post("/login", api.loginUser);
module.exports = router;
