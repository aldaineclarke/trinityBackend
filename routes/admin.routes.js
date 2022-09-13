const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin.controller");

router.route("/login").post(admin.adminLogin);

router.route("/register").post(admin.createAdmin);

module.exports = router;
