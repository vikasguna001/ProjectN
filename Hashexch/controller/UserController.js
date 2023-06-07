const UserModel = require('../model/UserModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var _ = require('underscore')
const jwtkey = "Node_Hashexch";

exports.RegisterUser = async function (req, res, next) {
    const { stUserName, stFullName, stAddress, stEmailId, stContactNo, stPassword, Conﬁrm_Password } = req.body;
    const AllUserName = await UserModel.findOne({ stUserName: req.body.stUserName });

    // if (!(stUserName && stFullName && stContactNo && stAddress && stEmailId && stPassword && Conﬁrm_Password)) {
    //     return res.status(201).json({
    //         status: false,
    //         message: "All fields are required ",
    //     });
    // }
    if (AllUserName && AllUserName.stUserName) {
        return res.status(201).json({
            status: false,
            message: "Contact Username Already Exists",
        });
    }
    if (stPassword != Conﬁrm_Password) {
        return res.status(201).json({
            status: false,
            message: "Password & Conﬁrm Password not same",
        });
    }
    let newpass = await bcrypt.hash(stPassword, 12);
    const data = {
        stUserName,
        stFullName,
        stContactNo,
        stAddress,
        stEmailId,
        inParentId: 0,
        btUserType: 3,
        blLock: false,
        blLockBet: false,
        dbSharePer: 0,
        dbCommPer: 0,
        inDelay: 0,
        inFDelay: 0,
        isResetPwd: false,
        inKey: "null",
        blChipStatus: false,
        stParentChip: 0,
        stPassword: newpass,
    };
    jwt.sign({ data }, jwtkey, async (err, token) => {
        if (err) {
            res.send({ result: "wrong...." });
        }
        const registerData = await UserModel.create(data);
        return res.status(201).send({
            status: true,
            data: registerData,
            auth_token: token,
        });
    });
};

exports.LoginUser = async function (req, res, next) {
    const { stUserName, stPassword } = req.body;
    const User = await UserModel.findOne({ stUserName });

    if (!(stUserName && stPassword)) {
        res.send({ status: false, message: "Enter valid username and password" });
    }

    if (User) {
        jwt.sign({ User }, jwtkey, async (err, token) => {
            if (err) {
                res.send({ status: false, message: "not valid username and password" });
            }
            const checkpass = await bcrypt.compare(stPassword, User.stPassword);
            if (checkpass) {
                res.status(200).json({
                    status: true,
                    data: User,
                    auth_token: token,
                });
            } else {
                res.send({ status: false, message: "not valid username and password" });
            }
        });
    } else {
        res.send({ status: false, message: "not valid username and password" });
    }
};
// exports.LoginUser = async function (req, res, next) {
//     const { Contact_No, Password } = req.body;
//     const User = await UserModel.findOne({ Contact_No });

//     if (!(Contact_No && Password)) {
//         res.send({ status: false, message: "Enter valid contact number and password" });
//     }

//     if (User) {
//         jwt.sign({ User }, jwtkey, async (err, token) => {
//             if (err) {
//                 res.send({ status: false, message: "not valid contact number and password" });
//             }
//             const checkpass = await bcrypt.compare(Password, User.Password);
//             if (checkpass) {
//                 res.status(200).json({
//                     status: true,
//                     data: User,
//                     auth_token: token,
//                 });
//             } else {
//                 res.send({ status: false, message: "not valid contact number and password" });
//             }
//         });
//     } else {
//         res.send({ status: false, message: "not valid contact number and password" });
//     }
// };

exports.VerifyUser = async function (req, res, next) {
    const { stContactNo, OTP } = req.body;
    const User = await UserModel.findOne({ stContactNo });

    if (!(stContactNo && OTP)) {
        res.send({ status: false, message: "Enter valid contact number and OTP" });
    }
    if (User) {
        jwt.sign({ User }, jwtkey, async (err, token) => {
            if (err) {
                res.send({ status: false, message: "not valid contact number and OTP" });
            }
            if (OTP == "1234") {
                res.status(200).json({
                    status: true,
                    data: User,
                    auth_token: token,
                });
            } else {
                res.send({ status: false, message: "not valid contact number and OTP" });
            }
        });
    } else {
        res.send({ status: false, message: "not valid contact number and OTP" });
    }
}

exports.GetUserData = async function (req, res, next) {
    try {
        const data = await UserModel.find();
        res.status(201).json({ status: true, data: data });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}

exports.DeleteUserData = async function (req, res, next) {
    try {
        const data = await UserModel.findByIdAndDelete(req.params.id);
        return res.status(201).json({ status: true, message: "successfully delete..!!" });
    } catch (error) {
        return res.status(404).json({
            status: false,
            error,
        });
    }
}

