const db = require("mongoose");

let userSchema = new db.Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true },
	username: { type: String, required: true },
});

module.exports = db.model("User", userSchema);
