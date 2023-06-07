const mongoose = require('mongoose');
var autoIncrement = require("mongoose-auto-increment");

const modelSchema = new mongoose.Schema({
    Id: {
        type: Number,
        unique: true,
        min: 1,
    },
    btMarketStatus: {
        type: Number
    },
    dtStartDate: {
        type: Date,
        default: Date.now()
    },
    stCompititionID: {
        type: String
    },
    stCompititionName: {
        type: String
    },
    stEventID: {
        type: String
    },
    stEventName: {
        type: String
    },
    stMarketID: {
        type: String
    },
    stMarketName: {
        type: String
    },
    stSportsID: {
        type: String
    },
    stSportsName: {
        type: String
    },
    blLockBet: {
        type: String
    },
    submaster: [
        {
            stInstrumentID: { type: String },
            stMarketID: { type: String },
            stRunnerName: { type: String },
            stSelectionID: { type: String },
        }
    ]
})

autoIncrement.initialize(mongoose.connection);
modelSchema.plugin(autoIncrement.plugin, {
    model: "Master",
    field: "Id",
    startAt: 1,
    incrementBy: 1,
});
const MasterModel = mongoose.model("Master", modelSchema);
module.exports = MasterModel;
