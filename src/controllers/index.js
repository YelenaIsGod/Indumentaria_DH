const fs = require('fs')
const path = require('path')

const indexController = (req, res) => {
    res.render('index');
}

const loginController = (req, res) => {
    res.render('login');
}

const registerController = (req, res) => {
    res.render('register');
}

const productoController = (req, res) => {
    res.render('producto');
}

const carritoController = (req, res) => {
    res.render('carrito');
}

module.exports = {
    indexController,
    loginController,
    registerController,
    productoController,
    carritoController
}