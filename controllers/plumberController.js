const { JSONResponse } = require('../utilities/JSONResponse')
const Plumber = require('../models/plumber.model')



exports.getAllPlumbers = async (req, res) => {
	try {
		const plumber = await Plumber.find()
        JSONResponse.success(res, 'Success.', plumber, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling Plumber model.", error, 500)
	}
}

exports.getPlumberById = async (req, res) => {
	try {
		const plumber = await Plumber.findById({_id:req.params.id})
        JSONResponse.success(res, 'Success.', plumber, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling plumber model.", error, 500)
	}
}


/**
 * ### Description
 * Creating an plumber
 */
 exports.createPlumber = async (req, res) => {
	try {
		const plumber = await Plumber.create(req.body)
		JSONResponse.success(res, 'Success.', plumber, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling plumber model.", error, 500)
	}
}
exports.updatePlumber = async (req, res) => {
	try {
		const plumber = await Plumber.findByIdAndUpdate({_id:req.params.id},req.body)
		JSONResponse.success(res, 'Success.', plumber, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling plumber model.", error, 500)
	}
}

/**
 * ### Description
 * Deleting plumber from list
 */
exports.deletePlumberById = async (req, res) => {
	try {
		const plumber = await Plumber.findById(req.params.id)
		if (plumber) await plumber.delete()
		JSONResponse.success(res, 'Success.', plumber, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling plumber model.', error, 500)
	}
}







// async function getplumber(req, res, next) {
//     const plumber = req.body;
//     console.log('serching  for', user);

//     const savedUser = await userController.getUserByplumbernameAndemail(plumber.currentplumbername, plumber.currentPassword);
//     req.plumber = savedplumber;
//     // console.log(req.user);
//     next();
//}




