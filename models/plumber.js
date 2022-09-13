const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    plumbername: { 
        type: String,
        required: [true, 'Please enter a plumber name']
    },
    email: {
        type: String,
        required: [true, 'Please enter a plumber email']
    },
 
    status: {
		type: String,
		required: [true, 'available status'],
		enum: {
			values: ['available ', 'not-available'],
			message: 'plumber might be avaiable or not available',
		},
    },  



    phone: {
        type: String,
        required: [true, 'Please enter a plumber number']
    },
});

    

    module.exports = mongoose.model('plumber', UserSchema);
