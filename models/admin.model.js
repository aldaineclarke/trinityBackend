const db = require("mongoose");

let adminSchema = new db.Schema({
	email: { type: String, required },
	username: { type: String, required },
	password: { type: String, required },
});

model.exports = db.model("Admin", adminSchema);
