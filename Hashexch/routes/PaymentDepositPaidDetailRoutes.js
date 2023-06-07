var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const api = require('../controller/PaymentDepositPaidDetailController');

router.post("/postPaymentDepositPaidDetail", auth, api.PostPaymentDepositPaidDetailData);
router.get("/getPaymentDepositPaidDetail", auth, api.GetPaymentDepositPaidDetailData);
router.delete("/deletePaymentDepositPaidDetail/:id", auth, api.DeletePaymentDepositPaidDetailData);

module.exports = router;
