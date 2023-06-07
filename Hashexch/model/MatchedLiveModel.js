const mongoose = require('mongoose');
var autoIncrement = require("mongoose-auto-increment");

const modelSchema = new mongoose.Schema({
    Id: {
        type: Number,
        unique: true,
        min: 1,
    },
    inParentID: {
        type: Number,
    },
    inUserID: {
        type: Number,
    },
    stUsername: {
        type: String
    },
    lnOrderNo: {
        type: String,
    },
    lnTradeNo: {
        type: String
    },
    stSide: {
        type: String
    },
    dbStack: {
        type: Number
    },
    dbOdds: {
        type: String
    },
    dbAmount: {
        type: Number
    },
    stSportsID: {
        type: String
    },
    stMarketID: {
        type: String
    },
    stSelectionID: {
        type: String
    },
    stInstrumentID: {
        type: String
    },
    stRunnerName: {
        type: String
    },
    dbWin: {
        type: Number
    },
    dbLoss: {
        type: Number
    },
    stSentIP: {
        type: String
    },
    stSentUser: {
        type: String
    },
    inSentID: {
        type: Number
    },
    inSub: {
        type: Number
    },
    inSub1: {
        type: Number
    },
    inSub2: {
        type: Number
    },
    dtTradeTime: {
        type: Date,
        default: Date.now()
    },
})

autoIncrement.initialize(mongoose.connection);
modelSchema.plugin(autoIncrement.plugin, {
    model: "tbMatchedLive",
    field: "Id",
    startAt: 1,
    incrementBy: 1,
});
const MatchedLiveModel = mongoose.model("tbMatchedLive", modelSchema);
module.exports = MatchedLiveModel;
