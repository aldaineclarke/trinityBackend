const { JSONResponse } = require("../utilities/JSONResponse");
const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

/**
 * ### Description
 * Creating an admin
 */
exports.createAdmin = async (req, res) => {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 10);
		const admin = await Admin.create(req.body);
		admin.password = undefined;
		JSONResponse.success(res, "success", admin, 200);
	} catch (error) {
		JSONResponse.error(res, "error", error, 500);
	}
};

exports.adminLogin = async (req, res) => {
	try {
		const admin = await Admin.findOne({
			email: req.body.email,
			username: req.body.username,
		});

		if (
			admin &&
			(await bcrypt.compare(req.body.password, admin.password))
		) {
			console.log(admin);
			const token = jwt.sign(
				{ email: admin.email },
				process.env.JWT_SECRET_KEY
			);
			admin.password = undefined;
			return JSONResponse.success(res, "success", { token, admin }, 200);
		} else {
			JSONResponse.error(res, "error", "Admin does not exist", 500);
		}
	} catch (error) {
		JSONResponse.error(res, "error", error, 500);
	}
};
