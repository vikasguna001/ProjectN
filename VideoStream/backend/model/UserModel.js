const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const User = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  UserName: {
    type: String,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  }
});

autoIncrement.initialize(mongoose.connection);
User.plugin(autoIncrement.plugin, {
  model: "User",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
const UserModel = mongoose.model("User", User);
module.exports = UserModel;
