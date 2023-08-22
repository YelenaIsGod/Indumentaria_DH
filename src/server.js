const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/produc1.html'))
})

app.use(express.static('public'));

app.listen(3030, () => console.log('[server] runing on port 3030'));