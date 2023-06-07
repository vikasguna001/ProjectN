var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const api = require('../controller/MasterController');

router.post("/postMasterData", auth, api.PostMasterData);
router.get("/getMasterData", auth, api.GetMasterData);
router.delete("/deleteMasterData/:id", auth, api.DeleteMasterData);

module.exports = router;
