var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const api = require('../controller/PaymentDepositReqDetailController');

router.post("/postPaymentDepositReqDetail", auth, api.PostPaymentDepositReqDetailData);
router.get("/getPaymentDepositReqDetail", auth, api.GetPaymentDepositReqDetailData);
router.delete("/deletePaymentDepositReqDetail/:id", auth, api.DeletePaymentDepositReqDetailData);

module.exports = router;
