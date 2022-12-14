const { JSONResponse } = require('../utilities/JSONResponse')
const Product = require('../models/product.model')
const fs = require('fs');
/**
 * ### Description
 * Get all products
 */
exports.getAllProducts = async (req, res) => {
	try {
		const product = await Product.find()
        JSONResponse.success(res, 'Success.', product, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling product model.", error, 500)
	}
}

exports.getproductById = async (req, res) => {
	try {
		const product = await Product.findById({_id:req.params.id})
		if(product){
			JSONResponse.success(res, 'Success.', product, 200)
		}else{
			JSONResponse.success(res, 'Product NOT FOUND', product, 404)
		}
	} catch (error) {
		JSONResponse.error(res, "Failure handling product model.", error, 500)
	}
}

/**
 * ### Description
 * Creating an product
 */
exports.createProduct = async (req, res) => {
	try {
		if(req.file){
			req.body.image = req.file.path
		}
		const product = await Product.create(req.body)
		JSONResponse.success(res, 'Success.', product, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling product model.", error, 500)
	}
}
exports.updateProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate({_id:req.params.id},req.body)

		JSONResponse.success(res, 'Success.', product, 200)
		if(product){
			JSONResponse.success(res, 'Success.', product, 200)
		}else{
			JSONResponse.success(res, 'Product NOT FOUND', product, 404)
		}
	} catch (error) {
		JSONResponse.error(res, "Failure handling product model.", error, 500)
	}
}

/**
 * ### Description
 * Deleting product from list
 */
exports.deleteProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		
		if(product){
			await product.delete()
			console.log(product);
			console.log(await deleteImage(product.image));
			JSONResponse.success(res, 'Success.', product, 200)
		}else{
			JSONResponse.success(res, 'Product NOT FOUND', product, 404)
		}
	} catch (error) {
		JSONResponse.error(res, 'Failure handling product model.', error, 500)
	}


}

const deleteImage = (imgPath)=>{
	console.log(imgPath)
	return new Promise((resolve, reject)=>{
		if (!imgPath){
			reject("No Image was provided");
			}
		fs.unlink(imgPath, (error)=>{
			if (error){
				throw error;
			}
			resolve("file Deleted Successfully");
	})
});
}	