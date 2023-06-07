const mongoose = require('mongoose');
var autoIncrement = require("mongoose-auto-increment");

const modelSchema = new mongoose.Schema({
    Id: {
        type: Number,
        unique: true,
        min: 1,
    },
    inID: {
        type: Number
    },
    inParentID: {
        type: Number
    },
    inUserId: {
        type: Number
    },
    btChipType: {
        type: Number
    },
    deAmount: {
        type: Number
    },
    stRemarks: {
        type: String
    },
    deBalance: {
        type: Number
    },
    stMarketID: {
        type: String
    },
    btFilter: {
        type: Number
    },
    stSportsID: {
        type: String
    },
    dtDate: {
        type: Date,
        default: Date.now()
    }
})

autoIncrement.initialize(mongoose.connection);
modelSchema.plugin(autoIncrement.plugin, {
    model: "tbChipsTransaction",
    field: "Id",
    startAt: 1,
    incrementBy: 1,
});
const ChipsTransactionModel = mongoose.model("tbChipsTransaction", modelSchema);
module.exports = ChipsTransactionModel;
