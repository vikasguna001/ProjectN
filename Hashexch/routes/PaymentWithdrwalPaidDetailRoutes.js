var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const api = require('../controller/PaymentWithdrwalPaidDetailController');

router.post("/postPaymentWithdrwalPaidDetail",auth, api.PostPaymentWithdrwalPaidDetailData);
router.get("/getPaymentWithdrwalPaidDetail", auth, api.GetPaymentWithdrwalPaidDetailData);
router.delete("/deletePaymentWithdrwalPaidDetail/:id", auth, api.DeletePaymentWithdrwalPaidDetailData);
module.exports = router;
