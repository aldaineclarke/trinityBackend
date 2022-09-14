const { JSONResponse } = require("../utilities/JSONResponse");
const { ObjectId } = require("mongoose").Types;
const Order = require("../models/order.model");
class OrderController {

    static getAllOrders = async (req, res)=>{
        try{
            let orders = await Order.find().populate("products");
            JSONResponse.success(res, "success", orders, 200);
            
        }catch(error){
            JSONResponse.error(res,"error", error.message, 500);
        }
    }
    static getOrderById = async(req, res, next)=>{
        try{
            let id = req.params.id;
            if(!ObjectId.isValid(id)) throw new Error("Id is not valid");

            let order = await Order.findById(id);

            if(!order) throw new Error("There are no orders that match this ID");
            JSONResponse.success(res, "success", order, 200);

        }catch(error){
            JSONResponse.error(res, "error", error.message, 400)
        }
    }
    static deleteOrder = async (req, res, next)=>{
        try{
            let id = req.params.id;
            if(!ObjectId.isValid(id)) throw new Error("Id is not valid");
            let order = await Order.findByIdAndDelete(id);
            if(!order) throw new Error("The order that you requested doesn't exists");
            JSONResponse.success(res, "success", order, 202);
        }catch(error){
            JSONResponse.error(res, "error", error.message, 404);
        }
    }

    static createOrder = async(req, res) =>{
        try{
            let data = req.body;
            if(Object.keys(data).length <= 0) throw new Error("Please submit data for the order");
            let order = await new Order(data).save();
            return JSONResponse.success(res, "success", order, 201); 
        }catch(error){
            JSONResponse.error(res, "error", error.message, 400);
        }
    }
    static updateOrder = async(req, res) =>{
        try{
            let id = req.params.id;
            let data = req.body;
            if(!ObjectId.isValid(id)) throw new Error("This is not a valid id");
            if(Object.keys(data).length <= 0) throw new Error("Please submit data to update order");
            let order = await Order.findByIdAndUpdate(id, data, {new: true});
            if(!order) throw new Error("No user matches the id that is passed");
            return JSONResponse.success(res, "success", order, 201); 
        }catch(error){
            JSONResponse.error(res, "error", error.message, 400);
        }
    }

}


module.exports = OrderController;
