const PaymentWithdrwalReqDetailModel = require('../model/PaymentWithdrwalReqDetailModel');
const ChipsTransactionModel = require('../model/ChipsTransactionModel');


exports.PostPaymentWithdrwalReqDetailData = async function (req, res, next) {
    try {
        const { inUserID, inParentID, stUserName, holder_name, wallet_name, upi_add, email, tid, mobileNo, balance, bank_name, accountname, accountno,
            ifsc_code, swift_code, reqAmount, paymentMethod, image_name, rstatus, stRemarks, created_at, create_date_time } = req.body;

        const GetinUserID = await PaymentWithdrwalReqDetailModel.findOne({ inUserID: req.body.inUserID });
        if (GetinUserID && GetinUserID.inUserID) {
            return res.status(201).json({
                status: false,
                message: "UserID Already Exists",
            });
        }

        const GetBalance = await ChipsTransactionModel.findOne({ inUserId: req.body.inUserID });
        if (GetBalance.deBalance < reqAmount) {
            return res.status(404).json({ status: false, message: "Your account does not have the requested amount" });
        }

        const Data = {
            inUserID, inParentID, stUserName, holder_name, wallet_name, upi_add, email, tid, mobileNo, balance, bank_name, accountname, accountno,
            ifsc_code, swift_code, reqAmount, paymentMethod, image_name, rstatus: 1, stRemarks, created_at, create_date_time
        }

        const PaymentWithdrwalReqDetail_Data = await PaymentWithdrwalReqDetailModel.create(Data);
        return res.status(201).send({
            status: true,
            data: PaymentWithdrwalReqDetail_Data,
        });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
};

exports.GetPaymentWithdrwalReqDetailData = async function (req, res, next) {
    try {
        const data = await PaymentWithdrwalReqDetailModel.find(req.query);
        res.status(201).json({ status: true, data: data });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}



exports.DeletePaymentWithdrwalReqDetailData = async function (req, res, next) {
    try {
        const data = await PaymentWithdrwalReqDetailModel.findByIdAndDelete(req.params.id);
        return res.status(201).json({ status: true, message: "successfully delete..!!" });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}



