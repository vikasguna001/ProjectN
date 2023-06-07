var express = require("express");
var router = express.Router();
const api = require("../controller/VideoController");

router.post("/Video_PostData", api.Video_PostData);
router.get("/Video_GetData", api.Video_GetData);
router.delete("/Video_DeleteData/:id", api.Video_DeleteData);
router.post("/Video_UpdateData/:id", api.Video_UpdateData);
module.exports = router;
