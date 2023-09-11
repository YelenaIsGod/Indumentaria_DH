const express = require('express');
const index = require('../controllers/index');

const router = express.Router();

router.get('/', index.indexController);
router.get('/register', index.registerController);
router.get('/login', index.loginController);
router.get('/detail', index.productoController);
router.get('/carrito', index.carritoController);

module.exports = router;