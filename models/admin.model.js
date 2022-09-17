const db = require("mongoose");

let adminSchema = new db.Schema({
	email: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
});

module.exports = db.model("Admin", adminSchema);
