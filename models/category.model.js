const db = require("mongoose");

let categorySchema = new db.Schema({
  name: { type: String, required: true },
});

module.exports = db.model("Category", categorySchema);
