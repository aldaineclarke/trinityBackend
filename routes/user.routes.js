const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");

router.route("/user").post(user.createUser);

router.route("/userlogin").post(user.userLogin);

module.exports = router;
