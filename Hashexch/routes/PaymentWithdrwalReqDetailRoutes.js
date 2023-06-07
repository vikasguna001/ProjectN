var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const api = require('../controller/PaymentWithdrwalReqDetailController');

router.post("/postPaymentWithdrwalReqDetail",auth, api.PostPaymentWithdrwalReqDetailData);
router.get("/getPaymentWithdrwalReqDetail", auth, api.GetPaymentWithdrwalReqDetailData);
router.delete("/deletePaymentWithdrwalReqDetail/:id", auth, api.DeletePaymentWithdrwalReqDetailData);

module.exports = router;
