var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const api = require('../controller/ChipsTransactionController');

router.post("/postChipsTransactionData", auth, api.PostChipsTransactionData);
router.get("/getChipsTransactionData", auth, api.GetChipsTransactionData);
router.delete("/deleteChipsTransactionData/:id", auth, api.DeleteChipsTransactionData);
module.exports = router;
