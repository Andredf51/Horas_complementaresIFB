const express = require('express');
const bodyParser = require('body-parser');
const db = require('./connection');
const app = express();
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});
app.get('/produto',db.getProdutos);
app.listen(port, () => {
    console.log(`Rodando na Porta ${port}.`)
})