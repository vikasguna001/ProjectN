const VideoModel = require("../model/VideoModel");

exports.Video_PostData = async function (req, res, next) {
  try {
    const PostData_Data = {
      Video_Name: req.body.Video_Name,
      Video_Url: req.body.Video_Url,
    };
    const Video_PostData_Data = await VideoModel.create(PostData_Data);
    return res.status(201).json({
      status: "success",
      data: Video_PostData_Data,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.Video_GetData = async function (req, res, next) {
  try {
    const Video_Getdata = await VideoModel.find(req.query);
    return res.status(200).json({
      status: "success",
      data: Video_Getdata,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.Video_DeleteData = async function (req, res, next) {
  try {
    await VideoModel.findByIdAndDelete(req.params.id);
    return res.status(202).json({
      status: "success",
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(204).json({
      status: "Error",
      error,
    });
  }
};

exports.Video_UpdateData = async function (req, res, next) {
  try {
    const Function_FindById_Data = await VideoModel.findById(req.params.id);
    Function_FindById_Data.Video_Url = req.body.Video_Url;
    Function_FindById_Data.Video_Name = req.body.Video_Name;

    const Video_UpdateData_data = await VideoModel.findByIdAndUpdate(
      req.params.id,
      Function_FindById_Data
    );
    return res.status(202).json({
      status: "success",
      data: Video_UpdateData_data,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};
