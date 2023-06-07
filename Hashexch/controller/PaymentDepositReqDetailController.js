const PaymentDepositReqDetailModel = require('../model/PaymentDepositReqDetailModel');

exports.PostPaymentDepositReqDetailData = async function (req, res, next) {
    try {
        const GetinUserID = await PaymentDepositReqDetailModel.findOne({ inUserID: req.body.inUserID });
        if (GetinUserID && GetinUserID.inUserID) {
            return res.status(201).json({
                status: false,
                message: "UserID Already Exists",
            });
        }

        const { inUserID, inParentID, stUserName, holder_name, wallet_name, upi_add, email, tid, mobileNo, balance, bank_name, accountname, accountno,
            ifsc_code, swift_code, reqAmount, paymentMethod, image_name, rstatus, stRemarks, created_at, create_date_time } = req.body;


        if (100000 < reqAmount) {
            return res.status(404).json({ status: false, message: "You can deposit only 100k" });
        }

        const Data = {
            inUserID, inParentID, stUserName, holder_name, wallet_name, upi_add, email, tid, mobileNo, balance, bank_name, accountname, accountno,
            ifsc_code, swift_code, reqAmount, paymentMethod, image_name, rstatus: 1, stRemarks, created_at, create_date_time
        }
        const PaymentDepositReqDetail_Data = await PaymentDepositReqDetailModel.create(Data);
        return res.status(201).send({
            status: true,
            data: PaymentDepositReqDetail_Data,
        });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
};

exports.GetPaymentDepositReqDetailData = async function (req, res, next) {
    try {
        const data = await PaymentDepositReqDetailModel.find(req.query);
        res.status(201).json({ status: true, data: data });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}


exports.DeletePaymentDepositReqDetailData = async function (req, res, next) {
    try {
        const data = await PaymentDepositReqDetailModel.findByIdAndDelete(req.params.id);
        return res.status(201).json({ status: true, message: "successfully delete..!!" });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}

