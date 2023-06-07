const MasterModel = require('../model/MasterModel');

exports.PostMasterData = async function (req, res, next) {
    const { btMarketStatus, stCompititionID, stCompititionName, stEventID, stEventName, stMarketID, stMarketName,
        stSportsID, stSportsName, submaster } = req.body;
    const Data = {
        btMarketStatus,
        stCompititionID,
        stCompititionName,
        stEventID,
        stEventName,
        stMarketID,
        stMarketName,
        stSportsID,
        stSportsName,
        submaster
    };
    const Master_Data = await MasterModel.create(Data);
    return res.status(201).send({
        status: true,
        data: Master_Data,
    });
};

exports.GetMasterData = async function (req, res, next) {
    try {
        const data = await MasterModel.find();
        res.status(201).json({ status: true, data: data });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}


exports.DeleteMasterData = async function (req, res, next) {
    try {
        const data = await MasterModel.findByIdAndDelete(req.params.id);
        return res.status(201).json({ status: true, message: "successfully delete..!!" });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}



