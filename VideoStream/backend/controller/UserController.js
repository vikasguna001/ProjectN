const UserModel = require("../model/UserModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TOKEN_KEY = "VideoStream";

exports.registerUser = async function (req, res, next) {
  try {
    const { UserName, Email, Password } = req.body;

    if (!(Email && Password && UserName)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await UserModel.findOne({ Email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    encryptedPassword = await bcrypt.hash(Password, 10);

    const Data = await UserModel.create({
      UserName: UserName,
      Email: Email,
      Password: encryptedPassword,
    });
    const token = jwt.sign({ Id: Data.Id, Email }, TOKEN_KEY);
    return res.status(201).json({
      status: "success",
      data: Data,
      token,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.loginUser = async function (req, res, next) {
  const { Email, Password } = req.body;
  if (!(Email && Password)) {
    return res.status(400).send("All input is required");
  }
  const Data = await UserModel.findOne({ Email });
  if (Data && (await bcrypt.compare(Password, Data.Password))) {
    const token = jwt.sign({ Id: Data.Id, Email }, TOKEN_KEY);
    return res.status(200).json({ status: true, Data ,token });
  }
  return res.status(400).send("Invalid Credentials");
};
