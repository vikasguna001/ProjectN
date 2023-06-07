var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const api = require('../controller/MatchedLiveController');

router.post("/postMatchedLiveData", auth, api.PostMatchedLiveData);
router.get("/getMatchedLiveData", auth, api.GetMatchedLiveData);
router.delete("/deleteMatchedLiveData/:id", auth, api.DeleteMatchedLiveData);

module.exports = router;
