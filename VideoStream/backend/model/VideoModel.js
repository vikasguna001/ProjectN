const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const VideoSchema = new mongoose.Schema(
  {
    Id: {
      type: Number,
      unique: true,
      min: 1,
    },
    Video_Name: {
      type: String,
    },
    Video_Url: {
      type: String,
    },
  },
  {
    timestamps: { type: String },
  }
);

autoIncrement.initialize(mongoose.connection);
VideoSchema.plugin(autoIncrement.plugin, {
  model: "VideoUrl",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
const VideoModel = mongoose.model("VideoUrl", VideoSchema);
module.exports = VideoModel;
