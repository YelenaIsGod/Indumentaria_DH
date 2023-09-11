const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../db/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render('products', {
			products
		}); 
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
			const id = req.params.id; 
			const product = products.find(p => p.id == id);

			res.render('detail', {
				product, 
				toThousand
			}); 
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('product-create-form'); 
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const nuevoProducto = req.body;
		console.log(req.file);
		const productoConImagen = {
			...nuevoProducto, 
			image: req.file.filename, 
			id: new Date().getTime(), 
		};

		products.push(productoConImagen);

		fs.writeFileSync(productsFilePath, JSON.stringify(products));

		res.send('Recibi el formulario correctamente'); 
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const id = req.params.id; 
		const productToEdit = products.find(p => p.id == id);

		res.render('product-edit-form.ejs', {
			productToEdit
		}); 
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic

		res.send('Recibi el formulario de edición correctamente'); 
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		const id = +req.params.id; 
		const productoAEliminar = products.find(producto => producto.id === id);
		productoAEliminar.isDeleted = true;  

		fs.writeFileSync(productsFilePath, JSON.stringify(productosNuevos));
		res.send(`Elimine el producto`); 
	}
};

module.exports = controller;