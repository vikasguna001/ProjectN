var express = require('express');
var router = express.Router();
const api = require('../controller/UserController');
const auth = require('../middleware/auth');

router.post("/register", api.RegisterUser);
router.post("/login", api.LoginUser);
router.get("/verifyUser", api.VerifyUser);
router.get("/getUsres", auth, api.GetUserData);
router.delete("/removeUser/:id", auth, api.DeleteUserData);
module.exports = router;
