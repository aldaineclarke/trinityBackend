const { JSONResponse } = require("../utilities/JSONResponse");
const Service = require("../models/service.model");
const { ObjectId } = require("mongoose").Types;

/**
 * ### Description
 * Get all services
 */
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    JSONResponse.success(res, "Success.", services, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};

exports.getServiceById = async (req, res) => {
  try {
    let id = req.params.id;
    if(!ObjectId.isValid(id)) throw new Error("This is not a valid id for services");
    const service = await Service.findById({ _id: req.params.id });
    if(!service) throw new Error("There is no service that matches the id");
    JSONResponse.success(res, "Success.", service, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};

/**
 * ### Description
 * Creating an product
 */
exports.createService = async (req, res) => {
  try {
    let data = req.body;
    if(Object.keys(data).length <= 0) throw new Error("There is no data passed to create the service");

    const service = await Service.create(data);
    JSONResponse.success(res, "Success.", service, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};
exports.updateService = async (req, res) => {
  try {

    let id = req.params.id;
    let data = req.body;
    if(Object.keys(data).length <= 0) throw new Error("No data was passed to update service");
    if(!ObjectId.isValid(id)) throw new Error("The id that is provided is not a valid database id");

    const service = await Service.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if(!service) throw new Error("No service was found to update")
    JSONResponse.success(res, "Success.", service, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};

/**
 * ### Description
 * Deleting product from list
 */
exports.deleteServiceById = async (req, res) => {
  try {
    let id = req.params.id;
    if(!ObjectId.isValid(id)) throw new Error("The id that is provided is not a valid database id");
    const service = await Service.findByIdAndDelete(id);
    if (!service) throw new Error("There is no user found to delete")
    JSONResponse.success(res, "Success.", service, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};
