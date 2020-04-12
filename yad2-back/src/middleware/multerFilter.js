const multer = require('multer');
const multerFilter = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return callback(new Error('Please upload an image'));
        }
        callback(undefined, true);
    }
})

module.exports = multerFilter.array('image');