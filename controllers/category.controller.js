const { JSONResponse } = require("../utilities/JSONResponse");
const Category = require("../models/category.model");

/**
 * ### Description
 * Get all category
 */
exports.getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {``
    JSONResponse.error(res, "Failure handling category model.", error, 500);
  }
};

exports.getcategoryById = async (req, res) => {
  try {
    const category = await Category.findById({ _id: req.params.id });
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling category model.", error, 500);
  }
};

/**
 * ### Description
 * Creating an product
 */
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling category model.", error, 500);
  }
};
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling category model.", error, 500);
  }
};

/**
 * ### Description
 * Deleting product from list
 */
exports.deleteCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) await category.delete();
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling category model.", error, 500);
  }
};
