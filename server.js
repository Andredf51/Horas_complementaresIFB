const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./connection');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});
//Curso
app.get('/cursos',db.getCursos);
app.get('/cursosOrder',db.getCursosOrder);
app.post('/cursos',db.inserirCurso);
app.put('/cursos',db.atualizaCurso);
app.delete('/cursos',db.deletaCurso);
//Usuario
app.get('/usuario',db.getUsuario);
//Atividade
app.get('/atividade',db.getAtividade);
app.post('/atividade',db.setAtividade);


app.listen(port, () => {
    console.log(`Rodando na Porta ${port}.`)
})