const express = require('express');
const {indexController, loginController, registerController, productoController, carritoController} = require('../controllers/index');

const indexRouter = express.Router();
const loginRouter = express.Router();
const registerRouter = express.Router();
const productoRouter = express.Router();
const carritoRouter = express.Router();

indexRouter.get('/', indexController);
loginRouter.get('/', loginController);
registerRouter.get('/', registerController);
productoRouter.get('/', productoController);
carritoRouter.get('/', carritoController);

module.exports = {
    indexRouter,
    loginRouter,
    registerRouter,
    productoRouter,
    carritoRouter
};