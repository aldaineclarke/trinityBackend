const { JSONResponse } = require("../lib/helper");
const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * ### Description
 * Creating an admin
 */
exports.createAdmin = async (req, res) => {
	try {
		const admin = await Admin.create(req.body);
		JSONResponse.success(res, "Success.", admin, 200);
	} catch (error) {
		JSONResponse.error(res, "Failure handling admin model.", error, 500);
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
			const token = jwt.sign(
				{ email: company.email },
				process.env.JWT_SECRET
			);
			admin.password = undefined;
			return JSONResponse.success(res, "Success.", { token, admin }, 200);
		} else {
			JSONResponse.error(
				res,
				"Failure handling admin model.",
				error,
				500
			);
		}
	} catch (error) {
		JSONResponse.error(res, "Failure handling admin model.", error, 500);
	}
};
