// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/products');
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.')[1];

        cb(null, file.fieldname + '-' + new Date().getTime() + `.${extension}`);
    }
});

const upload = multer({
    storage, 
})
// ○ Recepción del formulario de edición.
// ○ Eliminación de productos.

// /*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', upload.single('image'), productsController.store); 


// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 
router.get('/edit/:id', productsController.edit); 
router.post('/edit/:id', productsController.update); 

router.post('/delete/:id', productsController.destroy); 


module.exports = router;