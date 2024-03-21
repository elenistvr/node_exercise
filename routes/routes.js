const express = require("express");
const handler = require("../apis/feedDb");
const userController = require("../apis/users");
const messageController = require("../apis/exchangedMessages");
const listUsersControler = require("../apis/listUsers");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "upload/" });

router.post("/feedDB", upload.single("file"), handler.feedDb);
router.get("/users", userController.getUsersByParams);
router.get("/exchangedMessages", messageController.getExchangedMessages);
router.get("/listOfUsers", listUsersControler.getListOfUsers);

module.exports = router;
