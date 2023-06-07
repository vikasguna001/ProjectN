const MatchedLiveModel = require('../model/MatchedLiveModel');

exports.PostMatchedLiveData = async function (req, res, next) {
    const { inParentID, inUserID, stUsername, lnOrderNo, lnTradeNo, stSide, dbStack, dbOdds, dbAmount, stSportsID, stMarketID, stSelectionID,
        stInstrumentID, stRunnerName, dbWin, dbLoss, stSentIP, stSentUser, inSentID, inSub, inSub1, inSub2 } = req.body;


    const Data = {
        inParentID, inUserID, stUsername, lnOrderNo, lnTradeNo, stSide, dbStack, dbOdds, dbAmount, stSportsID, stMarketID, stSelectionID,
        stInstrumentID, stRunnerName, dbWin, dbLoss, stSentIP, stSentUser, inSentID, inSub, inSub1, inSub2
    }

    const MatchedLive_Data = await MatchedLiveModel.create(Data);
    return res.status(201).send({
        status: true,
        data: MatchedLive_Data,
    });
};

exports.GetMatchedLiveData = async function (req, res, next) {
    try {
        const data = await MatchedLiveModel.find(req.query);
        res.status(201).json({ status: true, data: data });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}


exports.DeleteMatchedLiveData = async function (req, res, next) {
    try {
        const data = await MatchedLiveModel.findByIdAndDelete(req.params.id);
        return res.status(201).json({ status: true, message: "successfully delete..!!" });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}

