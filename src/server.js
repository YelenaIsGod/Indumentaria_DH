const express = require('express');
const path = require('path');
const router = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3032;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);
app.use('/products', productsRouter);


app.listen(PORT, () => {
    console.log(`[server] runing on port ${PORT}`)
});