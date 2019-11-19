const Pool = require('pg').Pool
//Quando for fazer a conexão com o banco entrar com as suas credenciais 
const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'horasComplementares',
    password: '',
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
//Consultando a tabela usuario
const getUsuario = (request, response) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
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
const setAtividade = (req,res)=>{
    const { Semestre, atividade, horas } = req.body
    pool.query(`INSERT INTO atividades VALUES ($1,$2,$3)`,[Semestre, atividade, horas],(error,results)=>{
        if(error){
            throw error
        }
        res.status(201).send(`Horas Adicionadas`);
    })
}
//Exportando a função
module.exports={
    getCursos,
    getAtividade,
    getUsuario,
    setAtividade
}