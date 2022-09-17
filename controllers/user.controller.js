const { JSONResponse } = require("../utilities/JSONResponse");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

/**
 * ### Description
 * Creating a user
 */
exports.createUser = async (req, res) => {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 10);
		const user = await User.create(req.body);
		user.password = undefined;
		JSONResponse.success(res, "success", user, 200);
	} catch (error) {
		JSONResponse.error(res, "error", error, 500);
	}
};

exports.userLogin = async (req, res) => {
	try {
		const user = await User.findOne({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			username: req.body.username,
		});

		if (user && (await bcrypt.compare(req.body.password, user.password))) {
			console.log(user);
			const token = jwt.sign(
				{ email: user.email },
				process.env.JWT_SECRET_KEY
			);
			user.password = undefined;
			return JSONResponse.success(res, "success", { token, user }, 200);
		} else {
			JSONResponse.error(res, "error", "User does not exist", 500);
		}
	} catch (error) {
		JSONResponse.error(res, "error", error, 500);
	}
};
