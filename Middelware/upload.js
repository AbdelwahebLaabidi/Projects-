// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null,__dirname+ '/../client/public/uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + "--" +'houba.' +file.originalname.split('.').pop());
//     }
// })
// const fileFilter = (req, file, cb) => {
//     if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
//         cb(null, true);
//     } else{
//         cb(null, false);
//     }
// };
// let upload = multer({ 
//     storage: storage,
//     limits : {fileSize : 300000000000000000},
    
// })
// module.exports = upload.single('image')
// // module.exports = upload.none()

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/../client/public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + 'houba.' + file.originalname.split('.').pop());
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.includes('jpeg') || file.mimetype.includes('png') || file.mimetype.includes('jpg')) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let upload = multer({
    storage: storage,
    limits: { fileSize: 300000000000000000 },
    fileFilter: fileFilter // Include fileFilter option
}).array('images', 5); // Change to .array() for multiple files

module.exports = upload;
