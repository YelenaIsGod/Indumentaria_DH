const index = {
    loginController: function(req, res) {
        res.render('login');
    },
    registerController: function(req, res) {
        res.render('register');
    },
    indexController: function (req, res) {
        res.render('index');
    },
    
    carritoController: function (req, res) {
        res.render('carrito');
    }
}



module.exports = index;