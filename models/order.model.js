const {Schema, model}  = require("mongoose");


const orderSchema = new Schema({
    email: {type: String, required:[true, "All orders must be provided a email to associate order with"]},
    products: [{type: Schema.Types.ObjectId,ref:"Product"}],
    total: {type: Number, required:[true, "There should be a total for all orders"]},
}, {timestamps:true});



module.exports =  model("Order", orderSchema);