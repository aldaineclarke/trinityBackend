const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");

router.route("/adduser").post(user.createUser);

router.route("/userlogin").post(user.userLogin);

module.exports = router;
