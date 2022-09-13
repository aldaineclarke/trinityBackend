const db = require('mongoose')

let productSchema = new db.Schema({
	name: {type: String, required: true},
    image: {type: String, required: true},
    category:{type:db.Types.ObjectId, ref: "Category"},
	price: { type: Number, required: true },
	quantity: { type: Number, required: true },
})

module.exports = db.model('Product', productSchema)
