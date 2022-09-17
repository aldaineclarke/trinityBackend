const { JSONResponse } = require("../utilities/JSONResponse");
const Category = require("../models/category.model");
const { ObjectId } = require("mongoose").Types;

/**
 * ### Description
 * Get all category
 */
exports.getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};

exports.getcategoryById = async (req, res) => {
  try {
    let id = req.params.id;
    if(!ObjectId.isValid(id)) throw new Error("This is not a valid id for category");
    const category = await Category.findById({ _id: req.params.id });
    if(!category) throw new Error("There is no category that matches the id");
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};

/**
 * ### Description
 * Creating an product
 */
exports.createCategory = async (req, res) => {
  try {
    let data = req.body;
    if(Object.keys(data).length <= 0) throw new Error("There is no data passed to create the category");

    const category = await Category.create(data);
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};
exports.updateCategory = async (req, res) => {
  try {

    let id = req.params.id;
    let data = req.body;
    if(Object.keys(data).length <= 0) throw new Error("No data was passed to update category");
    if(!ObjectId.isValid(id)) throw new Error("The id that is provided is not a valid database id");

    const category = await Category.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if(!category) throw new Error("No category was found to update")
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};

/**
 * ### Description
 * Deleting product from list
 */
exports.deleteCategoryById = async (req, res) => {
  try {
    let id = req.params.id;
    if(!ObjectId.isValid(id)) throw new Error("The id that is provided is not a valid database id");
    const category = await Category.findByIdAndDelete(id);
    if (!category) throw new Error("There is no user found to delete")
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "error", error.message, 500);
  }
};
