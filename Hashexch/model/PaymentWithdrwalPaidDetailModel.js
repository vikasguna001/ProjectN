const mongoose = require('mongoose');
var autoIncrement = require("mongoose-auto-increment");

const modelSchema = new mongoose.Schema({
    Id: {
        type: Number,
        unique: true,
        min: 1,
    },
    inUserID: {
        type: Number,
        unique: true,
    },
    inParentID: {
        type: Number
    },
    stUserName: {
        type: String
    },
    holder_name: {
        type: String,
    },
    wallet_name: {
        type: String
    },
    upi_add: {
        type: String
    },
    email: {
        type: String
    },
    tid: {
        type: String
    },
    mobileNo: {
        type: String
    },
    balance: {
        type: String
    },
    bank_name: {
        type: String
    },
    accountname: {
        type: String
    },
    accountno: {
        type: String
    },
    ifsc_code: {
        type: String
    },
    swift_code: {
        type: String
    },
    reqAmount: {
        type: Number
    },
    paymentMethod: {
        type: String
    },
    image_name: {
        type: String
    },
    rstatus: {
        type: Number
    },
    stRemarks: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    create_date_time: {
        type: Date,
        default: Date.now()
    }
})

autoIncrement.initialize(mongoose.connection);
modelSchema.plugin(autoIncrement.plugin, {
    model: "tbPaymentWithdrwalPaidDetail",
    field: "Id",
    startAt: 1,
    incrementBy: 1,
});
const PaymentWithdrwalPaidDetailModel = mongoose.model("tbPaymentWithdrwalPaidDetail", modelSchema);
module.exports = PaymentWithdrwalPaidDetailModel;
