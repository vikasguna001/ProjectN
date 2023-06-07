const ChipsTransactionModel = require('../model/ChipsTransactionModel');

exports.PostChipsTransactionData = async function (req, res, next) {
    try {
        const { inID, inParentID, inUserId, dtDate, btChipType, deAmount, stRemarks, deBalance, stMarketID, btFilter, stSportsID } = req.body;
        const GetinUserID = await ChipsTransactionModel.findOne({ inUserId: req.body.inUserId });
        if (GetinUserID && GetinUserID.inUserId) {
            const PaidDetailData = await ChipsTransactionModel.findById(GetinUserID.id)
            PaidDetailData.inID = req.body.inID
            PaidDetailData.inParentID = req.body.inParentID
            PaidDetailData.inUserId = req.body.inUserId
            PaidDetailData.btChipType = req.body.btChipType
            PaidDetailData.deAmount = req.body.deAmount
            PaidDetailData.stRemarks = req.body.stRemarks
            PaidDetailData.deBalance = req.body.deBalance
            PaidDetailData.stMarketID = req.body.stMarketID
            PaidDetailData.btFilter = req.body.btFilter
            PaidDetailData.stSportsID = req.body.stSportsID

            const UpdateData = await ChipsTransactionModel.findByIdAndUpdate(GetinUserID, PaidDetailData);
            res.status(201).json({ status: true, data: PaidDetailData });
        } else {
            const Data = { inID, inParentID, inUserId, dtDate, btChipType, deAmount, stRemarks, deBalance, stMarketID, btFilter, stSportsID }
            const ChipsTransaction_Data = await ChipsTransactionModel.create(Data);
            return res.status(201).send({
                status: true,
                data: ChipsTransaction_Data,
            });
        }
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
};

exports.GetChipsTransactionData = async function (req, res, next) {
    try {
        const data = await ChipsTransactionModel.find(req.query);
        res.status(201).json({ status: true, data: data });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}


exports.DeleteChipsTransactionData  = async function (req, res, next) {
    try {
        const data = await ChipsTransactionModel.findByIdAndDelete(req.params.id);
        return res.status(201).json({ status: true, message: "successfully delete..!!" });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}



