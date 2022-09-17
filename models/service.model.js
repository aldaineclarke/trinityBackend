const {Schema, model} = require("mongoose");


const serviceSchema = new Schema({
    name: {type: String, required: [true, "Please enter a name for service"]},
}, {timestamps:true});



module.exports =  model("Service", serviceSchema);