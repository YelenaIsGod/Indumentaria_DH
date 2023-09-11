const express = require('express');
const router = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3032;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.use('/', router);
app.use('/products', productsRouter);


app.listen(PORT, () => {
    console.log(`[server] runing on port ${PORT}`)
});