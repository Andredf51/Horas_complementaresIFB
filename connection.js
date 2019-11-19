const Pool = require('pg').Pool
//Quando for fazer a conexão com o banco entrar com as suas credenciais 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'horasComplementares',
    password: 'andre',
    port: 5432,
});
// Consultando a tabela cursos
const getCursos = (request, response) => {
    pool.query('SELECT * FROM cursos', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
//Ordenando a tabela cursos
const getCursosOrder = (request, response) => {
    pool.query('SELECT * FROM cursos order by nome_curso', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
// INserirndo um curso 
const inserirCurso = function (req, res) {
    const { id, nome, carga } = req.body;
    pool.query(`INSERT INTO cursos VALUES ($1,$2,$3)`, [id, nome,carga], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}
//Atualizando Curso 
const atualizaCurso = function(req,res){
    const { id, nome, carga } = req.body;
    pool.query('UPDATE cursos SET nome_curso = ($2), carga_hor_max = ($3) where (id_cursos = ($1))',
    [id, nome,carga], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}
//Deletando Curso
const deletaCurso = function(req,res){
    const { id, nome, carga } = req.body;
    pool.query('DELETE FROM cursos WHERE (nome_curso = ($2)) or (carga_hor_max = ($3)) or (id_cursos = ($1))',
    [id, nome,carga], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}
//Consultando a tabela usuario
const getUsuario = (request, response) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//criar coordenador
const inserirCoordenador = function (req, res) { //nome generico da função
    const { matricula, nome,  tipo, login, senha,curso } = req.body;
    pool.query(`INSERT INTO usuarios (id_usuario, matricula, nome, tipo, login_user, senha_user, id_cursos_user ) 
     VALUES (default,$1,$2,$3,$4,$5,$6)`, [matricula, nome,  tipo, login, senha,curso], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}

//deletar coordenador
const deleta_coor = function(req,res){
    const { id } = req.body;
    pool.query('DELETE FROM usuarios WHERE (id_usuario = ($1))',
    [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}

//Consultando a tabela atividade
const getAtividade = (request, response) => {
    pool.query('SELECT * FROM atividades', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const setAtividade = (req, res) => {
    const { Semestre, atividade, horas } = req.body
    pool.query(`INSERT INTO atividades VALUES ($1,$2,$3)`, [Semestre, atividade, horas], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Horas Adicionadas`);
    })
}

const filtroAluno = (request, response) => {
    pool.query('SELECT * FROM atividades where id_atividade = 1', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

 
//Exportando a função
module.exports = {
    getCursos,
    getAtividade,
    getUsuario,
    setAtividade,
    getCursosOrder,
    inserirCurso,
    atualizaCurso,
    deletaCurso,
    inserirCoordenador,
    deleta_coor,
    filtroAluno
}