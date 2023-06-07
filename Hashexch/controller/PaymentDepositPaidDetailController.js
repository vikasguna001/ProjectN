const PaymentDepositPaidDetailModel = require('../model/PaymentDepositPaidDetailModel');
const PaymentDepositReqDetailModel = require('../model/PaymentDepositReqDetailModel');
const ChipsTransactionModel = require('../model/ChipsTransactionModel');

exports.PostPaymentDepositPaidDetailData = async function (req, res, next) {
    try {
        const { inUserID, inParentID, stRemarks, created_at, create_date_time, stUserName, holder_name, wallet_name, upi_add, email, tid, mobileNo, balance, bank_name, accountname, accountno, ifsc_code, swift_code, reqAmount, paymentMethod, image_name, rstatus } = req.body;
        const AllData = await PaymentDepositReqDetailModel.find({ inUserID: req.body.inUserID });

        const GetinUserID1 = await PaymentDepositReqDetailModel.findOne({ inUserID: req.body.inUserID });
        if (!GetinUserID1) {
            return res.status(201).json({
                status: false,
                message: "The user has not made a Deposite request",
            });
        }


        const GetinUserID = await PaymentDepositPaidDetailModel.findOne({ inUserID: req.body.inUserID });
        if (GetinUserID && GetinUserID.inUserID) {
            const PaidDetailData = await PaymentDepositPaidDetailModel.findById(GetinUserID.id)
            PaidDetailData.inParentID = AllData[0].inParentID,
                PaidDetailData.stUserName = AllData[0].stUserName,
                PaidDetailData.holder_name = AllData[0].holder_name,
                PaidDetailData.wallet_name = AllData[0].wallet_name,
                PaidDetailData.upi_add = AllData[0].upi_add,
                PaidDetailData.email = AllData[0].email,
                PaidDetailData.tid = AllData[0].tid,
                PaidDetailData.mobileNo = AllData[0].mobileNo,
                PaidDetailData.balance = AllData[0].balance,
                PaidDetailData.bank_name = AllData[0].bank_name,
                PaidDetailData.accountname = AllData[0].accountname,
                PaidDetailData.accountno = AllData[0].accountno,
                PaidDetailData.ifsc_code = AllData[0].ifsc_code,
                PaidDetailData.swift_code = AllData[0].swift_code,
                PaidDetailData.reqAmount = AllData[0].reqAmount,
                PaidDetailData.paymentMethod = AllData[0].paymentMethod,
                PaidDetailData.image_name = AllData[0].image_name,
                PaidDetailData.rstatus = 2,
                PaidDetailData.stRemarks = AllData[0].stRemarks

            const UpdateData = await PaymentDepositPaidDetailModel.findByIdAndUpdate(GetinUserID, PaidDetailData);
            res.status(201).json({ status: true, data: PaidDetailData });
        } else {
            const Data = {
                inUserID,
                inParentID: AllData[0].inParentID,
                stUserName: AllData[0].stUserName,
                holder_name: AllData[0].holder_name,
                wallet_name: AllData[0].wallet_name,
                upi_add: AllData[0].upi_add,
                email: AllData[0].email,
                tid: AllData[0].tid,
                mobileNo: AllData[0].mobileNo,
                balance: AllData[0].balance,
                bank_name: AllData[0].bank_name,
                accountname: AllData[0].accountname,
                accountno: AllData[0].accountno,
                ifsc_code: AllData[0].ifsc_code,
                swift_code: AllData[0].swift_code,
                reqAmount: AllData[0].reqAmount,
                paymentMethod: AllData[0].paymentMethod,
                image_name: AllData[0].image_name,
                rstatus: 2,
                stRemarks: AllData[0].stRemarks,
                created_at,
                create_date_time
            }
            const PaymentDepositReqDetail_Data = await PaymentDepositPaidDetailModel.create(Data);
            res.status(201).send({
                status: true,
                data: PaymentDepositReqDetail_Data,
            });
        }

        if (inUserID) {
            const tbchiptrasection_Data = { inParentId: inParentID, inUserId: inUserID, btChipType: 1, btFilter: 2, stRemarks, deAmount: AllData[0].reqAmount, deBalance: AllData[0].reqAmount, stMarketID: 0, stSportsID: 0 }
            const GetinUserID = await ChipsTransactionModel.findOne({ inUserId: req.body.inUserID });
            if (GetinUserID && GetinUserID.inUserId) {
                const PaidDetailData = await ChipsTransactionModel.findById(GetinUserID.id)
                PaidDetailData.inID = 0
                PaidDetailData.inParentID = AllData[0].inParentID
                PaidDetailData.btChipType = 1
                PaidDetailData.deAmount = AllData[0].reqAmount
                PaidDetailData.stRemarks = AllData[0].stRemarks
                PaidDetailData.deBalance = (GetinUserID.deBalance + AllData[0].reqAmount)
                PaidDetailData.stMarketID = 0
                PaidDetailData.btFilter = 2
                PaidDetailData.stSportsID = 0

                const UpdateData = await ChipsTransactionModel.findByIdAndUpdate(GetinUserID, PaidDetailData);
            } else {
                const ChipsTransaction_Data = await ChipsTransactionModel.create(tbchiptrasection_Data);
            }
            const removePaymentDepositReqDetail = await PaymentDepositReqDetailModel.findOneAndDelete({ inUserID: inUserID });
        }
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
};

exports.GetPaymentDepositPaidDetailData = async function (req, res, next) {
    try {
        const data = await PaymentDepositPaidDetailModel.find(req.query);
        res.status(201).json({ status: true, data: data });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}


exports.DeletePaymentDepositPaidDetailData = async function (req, res, next) {
    try {
        const data = await PaymentDepositPaidDetailModel.findByIdAndDelete(req.params.id);
        return res.status(201).json({ status: true, message: "successfully delete..!!" });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}



