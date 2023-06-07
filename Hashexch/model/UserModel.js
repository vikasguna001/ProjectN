const mongoose = require('mongoose');
var autoIncrement = require("mongoose-auto-increment");

const modelSchema = new mongoose.Schema({
    inUserID: {
        type: Number,
        unique: true,
        min: 1,
    },
    inParentId: {
        type: Number
    },
    stUserName: {
        type: String
    },
    stFullName: {
        type: String
    },
    stAddress: {
        type: String
    },
    stEmailId: {
        type: String
    },
    stContactNo: {
        type: Number
    },
    stPassword: {
        type: String
    },
    Conﬁrm_Password: {
        type: String
    },
    btUserType: {
        type: Number
    },
    blLock: {
        type: Boolean
    },
    blLockBet: {
        type: Boolean
    },
    dbSharePer: {
        type: Number
    },
    dbCommPer: {
        type: Number
    },
    inDelay: {
        type: Number
    },
    inFDelay: {
        type: Number
    },
    isResetPwd: {
        type: Boolean
    },
    inKey: {
        type: String
    },
    blChipStatus: {
        type: Boolean
    },
    stParentChip: {
        type: Number
    },
    current_date_time: {
        type: Date,
        default: Date.now()
    },
})

autoIncrement.initialize(mongoose.connection);
modelSchema.plugin(autoIncrement.plugin, {
    model: "User",
    field: "inUserID",
    startAt: 1,
    incrementBy: 1,
});
const UserModel = mongoose.model("User", modelSchema);
module.exports = UserModel;
