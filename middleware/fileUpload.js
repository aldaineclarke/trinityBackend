const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/productImages/')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, file.originalname.split(ext)[0] + Date.now() + ext)
    }
})

let upload = multer({
    storage: storage,
    //     fileFilter: (req, file, callback) => {
    //         if(file.mimetype == 'application/png'){
    //             callback(null, true)
    //         }else{
    //             console.log('the file uploaded is not supported');
    //             callback(null, false)
    //         }
    //     },
    limits: {
        fieldSize: 1024 * 1024 * 10
    }
})

module.exports = upload;
